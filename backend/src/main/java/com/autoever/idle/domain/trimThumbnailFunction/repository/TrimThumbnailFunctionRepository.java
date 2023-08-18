package com.autoever.idle.domain.trimThumbnailFunction.repository;

import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;

import java.util.List;

public interface TrimThumbnailFunctionRepository {

    List<TrimThumbnailFunctionResponse> findThumbnailFunctionByTrimId(Long trimId);
}
