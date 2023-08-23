package com.autoever.idle.domain.option.repository;

import com.autoever.idle.domain.option.dto.OptionDto;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class OptionRepositoryImpl implements OptionRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<OptionDto> findAdditionalOptionList(Long trimId, Long engineId, List<Long> selectedOptionIds) {
        String query = "SELECT o.option_id optionId, o.name optionName," +
                "o.price optionPrice, o.purchase_rate optionPurchaseRate, " +
                "o.description optionDescription, oc.name optionCategory, " +
                "CASE " +
                "    WHEN NOT EXISTS (SELECT 1 FROM OPTION_STATUS os WHERE ";
        if (selectedOptionIds.isEmpty()) {
            query += "os.selected_engine_id = :engineId AND os.not_activated_option_id = o.option_id) ";
        } else {
            query += "(os.selected_engine_id = :engineId OR os.selected_option_id IN (:selectedOptionIds)) AND os.not_activated_option_id = o.option_id) ";
        }

        query +=
                "    THEN 'true' " +
                        "    ELSE 'false' " +
                        "END AS optionCanSelect " +
                        "FROM FUNCTIONS f " +
                        "JOIN TRIM_FUNCTION tf ON f.function_id = tf.function_id " +
                        "JOIN `OPTION` o ON f.option_id = o.option_id " +
                        "JOIN OPTION_CATEGORY oc ON o.option_category_id = oc.option_category_id " +
                        "WHERE tf.trim_id = :trimId AND tf.is_default = 'FALSE' " +
                        "GROUP BY optionId " +
                        "ORDER BY optionName; ";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trimId", trimId);
        params.addValue("engineId", engineId);
        params.addValue("selectedOptionIds", selectedOptionIds);

        RowMapper<OptionDto> rowMapper = new BeanPropertyRowMapper<>(OptionDto.class);
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
        RowMapper<SelectedOptionDto> rowMapper = new BeanPropertyRowMapper<>(SelectedOptionDto.class);

        return jdbcTemplate.query(query, params, rowMapper);
    }
}
