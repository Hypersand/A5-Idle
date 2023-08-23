package com.autoever.idle.domain.category.functionCategory.repository;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.function.dto.DefaultFunctionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FunctionCategoryRepositoryImpl implements FunctionCategoryRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public List<FunctionCategoryDto> findAll() {
        RowMapper<FunctionCategoryDto> rowMapper = new BeanPropertyRowMapper<>(FunctionCategoryDto.class);

        return jdbcTemplate.query("select function_category_id, name as categoryName from FUNCTION_CATEGORY", rowMapper);
    }

    public List<DefaultFunctionDto> getDefaultOptionByTrimId(Long trimId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        RowMapper<DefaultFunctionDto> rowMapper = new BeanPropertyRowMapper<>(DefaultFunctionDto.class);

        return jdbcTemplate.query(
                "select F.function_category_id as categoryId, F.name from TRIM_FUNCTION as TF " +
                        "join FUNCTIONS as F on TF.function_id = F.function_id " +
                        "where TF.is_default = 'TRUE' and TF.trim_id = :trimId " +
                        "order by F.function_category_id",
                param, rowMapper);
    }

    public List<DefaultFunctionNameResponse> getDefaultOptions(Long trimId, Long categoryId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);
        param.addValue("categoryId", categoryId);

        RowMapper<DefaultFunctionNameResponse> rowMapper = new BeanPropertyRowMapper<>(DefaultFunctionNameResponse.class);

        return jdbcTemplate.query(
                "select F.name " +
                        "from FUNCTIONS as F " +
                        "left join TRIM_FUNCTION as TF on F.function_id = TF.function_id " +
                        "where TF.is_default = 'TRUE' and TF.trim_id = :trimId and F.function_category_id = :categoryId",
                param, rowMapper);
    }

    public List<DefaultFunctionResponse> getDefaultOptionsDetail(Long trimId, Long categoryId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);
        param.addValue("categoryId", categoryId);

        String sql = "select f.name as functionName, f.img_url as functionImgUrl, f.description as functionDescription from FUNCTIONS f " +
                "left join TRIM_FUNCTION tf on f.function_id = tf.function_id " +
                "where tf.is_default = 'TRUE' and trim_id = :trimId and f.function_category_id = :categoryId " +
                "ORDER BY f.name ASC";

        RowMapper<DefaultFunctionResponse> rowMapper = new BeanPropertyRowMapper<>(DefaultFunctionResponse.class);

        return jdbcTemplate.query(sql, param, rowMapper);
    }

}
