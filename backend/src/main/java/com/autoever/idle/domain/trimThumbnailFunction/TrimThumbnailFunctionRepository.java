package com.autoever.idle.domain.trimThumbnailFunction;

import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionDto;

import java.util.List;

public interface TrimThumbnailFunctionRepository {

    List<TrimThumbnailFunctionDto> findThumbnailFunctionByTrimId(Long trimId);
}
