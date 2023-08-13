package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.AdditionalFunctionBillDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class FunctionRepositoryImpl implements FunctionRepository {

    private final JdbcTemplate jdbcTemplate;

    public FunctionRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<MyTrimFunctionDto> findMyTrimFunctions() {
        return jdbcTemplate.query("select FUNCTIONS.function_id, name, description, trim_id, img_url " +
                        "from TRIM_FUNCTION TF " +
                        "join FUNCTIONS on TF.function_id=FUNCTIONS.function_id " +
                        "where is_my_trim='TRUE' order by trim_id",
                ((rs, rowNum) -> new MyTrimFunctionDto(
                        rs.getInt("FUNCTIONS.function_id"),
                        rs.getString("name"),
                        rs.getString("description"),
                        rs.getString("img_url"),
                        rs.getInt("trim_id")
                )));
    }

    @Override
    public List<AdditionalFunctionBillDto> findAdditonalFunctions(List<Long> additionalFunctionIds) {
        StringBuilder queryBuilder = new StringBuilder();
        queryBuilder.append("select f.function_id functionId, fc.name functionCategory, ")
                .append("f.img_url functionImgUrl, f.description functionDescription from FUNCTIONS f ")
                .append("left join FUNCTION_CATEGORY fc on f.function_category_id = fc.function_category_id ")
                .append("where f.function_id IN (");

        queryBuilder.append(additionalFunctionIds.stream()
                .map(id -> "?")
                .collect(Collectors.joining(", ")));
        queryBuilder.append(")");

        RowMapper rowMapper = new BeanPropertyRowMapper(AdditionalFunctionBillDto.class);
        return jdbcTemplate.query(queryBuilder.toString(), rowMapper, additionalFunctionIds.toArray());
    }
}
