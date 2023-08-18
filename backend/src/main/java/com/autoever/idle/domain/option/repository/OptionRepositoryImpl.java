package com.autoever.idle.domain.option.repository;

import com.autoever.idle.domain.option.dto.OptionDto;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class OptionRepositoryImpl implements OptionRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<OptionDto> findAdditionalOptionList(Long trimId) {
        String query = "select o.option_id optionId, o.name optionName, o.price optionPrice, o.purchase_rate optionPurchaseRate, " +
                "o.description optionDescription, oc.name optionCategory " +
                "from FUNCTIONS f join TRIM_FUNCTION tf on f.function_id = tf.function_id " +
                "join `OPTION` o on f.option_id = o.option_id " +
                "join OPTION_CATEGORY oc on o.option_category_id = oc.option_category_id " +
                "where tf.trim_id = :trimId and tf.is_default = 'FALSE' " +
                "group by optionId " +
                "order by optionPrice";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trimId", trimId);

        RowMapper rowMapper = new BeanPropertyRowMapper(OptionDto.class);
        return jdbcTemplate.query(query, params, rowMapper);
    }

    @Override
    public List<Long> findNotActivatedOptionIdList(Long engineId, List<Long> selectedOptionIdList) {
        String query;
        if (selectedOptionIdList.isEmpty()) {
            query = "SELECT os.not_activated_option_id FROM OPTION_STATUS os " +
                    "WHERE os.selected_engine_id = :engineId";
        } else {
            query = "SELECT os.not_activated_option_id FROM OPTION_STATUS os " +
                    "WHERE os.selected_engine_id = :engineId OR os.selected_option_id IN (:selectedOptionIdList)";
        }

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("engineId", engineId);
        params.addValue("selectedOptionIdList", selectedOptionIdList);

        RowMapper<Long> rowMapper = new SingleColumnRowMapper<>(Long.class);

        return jdbcTemplate.query(query, params, rowMapper);
    }

    @Override
    public List<SelectedOptionDto> findSelectedOptions(List<Long> optionIdList) {
        String query = "SELECT o.option_id optionId, o.name optionName, o.price optionPrice, oc.name optionCategory, " +
                "(SELECT f.img_url FROM FUNCTIONS f WHERE f.option_id = o.option_id LIMIT 1) optionImgUrl, " +
                "o.description optionDescription " +
                "FROM `OPTION` o JOIN OPTION_CATEGORY oc ON o.option_category_id = oc.option_category_id " +
                "WHERE o.option_id IN (:optionIdList)";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("optionIdList", optionIdList);
        RowMapper rowMapper = new BeanPropertyRowMapper(SelectedOptionDto.class);

        return jdbcTemplate.query(query, params, rowMapper);
    }
}
