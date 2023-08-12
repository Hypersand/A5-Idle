package com.autoever.idle.domain.category.functionCategory;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class FunctionCategoryRepositoryImpl implements FunctionCategoryRepository {
    private final JdbcTemplate jdbcTemplate;

    public FunctionCategoryRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<FunctionCategoryDto> findAll() {
        return jdbcTemplate.query(
                "select fc.function_category_id, fc.name from FUNCTION_CATEGORY as fc",
                (rs, rowNum) -> new FunctionCategoryDto(
                        rs.getLong("function_category_id"),
                        rs.getString("name")
                )
        );
    }

    public List<DefaultFunctionNameResDto> getDefaultOptions(Long trimId, Long categoryId) {
        return jdbcTemplate.query(
                "select F.name as function_name " +
                "from FUNCTION_CATEGORY as FC " +
                "left join FUNCTIONS as F on FC.function_category_id = F.function_category_id " +
                "left join TRIM_FUNCTION as TF on F.function_id = TF.function_id " +
                "where TF.is_default = 'TRUE' and TF.trim_id = ? and FC.function_category_id = ?",
                (rs, rowNum) -> new DefaultFunctionNameResDto(
                        rs.getString("function_name")
                ),
                trimId,
                categoryId);
    }

    public List<DefaultFunctionResDto> getDefaultOptionsDetail(Long trimId, Long categoryId) {
        String sql = "select f.name as functionName, f.img_url as functionImgUrl, f.description as functionDescription from FUNCTIONS f " +
                "left join TRIM_FUNCTION tf on f.function_id = tf.function_id " +
                "where tf.is_default = 'TRUE' and trim_id = ? and f.function_category_id = ?";

        Object[] args = { trimId, categoryId };

        RowMapper rowMapper = new BeanPropertyRowMapper(DefaultFunctionResDto.class);

        return jdbcTemplate.query(sql, rowMapper, args);
    }

}
