package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class FunctionRepositoryImpl implements FunctionRepository{

    private JdbcTemplate jdbcTemplate;

    public FunctionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<MyTrimFunctionDto> findMyTrimFunctions(){
        return jdbcTemplate.query("select f.function_id, name, description, trim_id, img_url " +
                "from TRIM_FUNCTION tf " +
                "join FUNCTIONS f on tf.function_id=f.function_id " +
                "where is_my_trim='TRUE' order by trim_id",
                ((rs, rowNum) -> new MyTrimFunctionDto(
                        rs.getInt("f.function_id"),
                        rs.getString("name"),
                        rs.getString("description"),
                        rs.getString("img_url"),
                        rs.getInt("trim_id")
                )));
    }
}
