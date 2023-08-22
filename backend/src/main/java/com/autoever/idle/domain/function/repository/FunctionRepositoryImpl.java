package com.autoever.idle.domain.function.repository;

import com.autoever.idle.domain.function.dto.FunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.option.dto.MyTrimOptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FunctionRepositoryImpl implements FunctionRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<MyTrimFunctionDto> findMyTrimFunctions() {
        RowMapper<MyTrimFunctionDto> rowMapper = new BeanPropertyRowMapper<>(MyTrimFunctionDto.class);
        return jdbcTemplate.query("select FUNCTIONS.function_id AS functionId, name, description, trim_id AS trimId, img_url AS imgUrl " +
                "from TRIM_FUNCTION TF " +
                "join FUNCTIONS on TF.function_id=FUNCTIONS.function_id " +
                "where is_my_trim='TRUE' order by trim_id", rowMapper);
    }

    @Override
    public List<MyTrimDto> findTrimBySelectFunctions(int functionId) {
        String query = "WITH TMP_TRIM_FUNCTION AS " +
                "(       SELECT name, is_default, T.trim_id " +
                "        FROM TRIM_FUNCTION AS TF " +
                "        JOIN TRIM AS T ON TF.trim_id = T.trim_id " +
                "        WHERE TF.function_id = :functionId " +
                ") " +
                "SELECT TRIM.name, is_default AS isDefault FROM TRIM " +
                "    LEFT JOIN TMP_TRIM_FUNCTION AS TTF " +
                "    ON TRIM.trim_id=TTF.trim_id";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("functionId", functionId);
        RowMapper<MyTrimDto> rowMapper = new BeanPropertyRowMapper<>(MyTrimDto.class);
        return jdbcTemplate.query(query, params, rowMapper);
    }

    public String checkMyTrimFunction(int functionId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("functionId", functionId);
        RowMapper<String> rowMapper = new SingleColumnRowMapper<>(String.class);
        try {
            return jdbcTemplate.queryForObject("SELECT is_my_trim FROM FUNCTIONS WHERE function_id=:functionId ", param, rowMapper);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    @Override
    public MyTrimOptionResponse findOptionBySelectFunction(Long functionId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("functionId", functionId);
        RowMapper<MyTrimOptionResponse> rowMapper = new BeanPropertyRowMapper<>(MyTrimOptionResponse.class);
        return jdbcTemplate.queryForObject("SELECT O.option_id AS optionId, O.name AS optionName, price AS optionPrice FROM FUNCTIONS AS F " +
                        "JOIN `OPTION` AS O ON F.option_id=O.option_id " +
                        "WHERE function_id=:functionId",
                param, rowMapper);
    }

    @Override
    public List<FunctionDto> findFunctionsInAdditionalOption(Long optionId) {
        String query = "select f.function_id functionId, f.name functionName, f.description functionDescription, " +
                "f.img_url functionImgUrl, f.wheel_logo_img_url wheelLogoImgUrl " +
                "from FUNCTIONS f left join `OPTION` o on f.option_id = o.option_id " +
                "where f.option_id = :optionId";

        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("optionId", optionId);
        RowMapper<FunctionDto> rowMapper = new BeanPropertyRowMapper<>(FunctionDto.class);
        return jdbcTemplate.query(query, param, rowMapper);
    }

}
