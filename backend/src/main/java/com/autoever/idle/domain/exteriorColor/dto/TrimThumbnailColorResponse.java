package com.autoever.idle.domain.exteriorColor.dto;

import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TrimThumbnailColorResponse {

    private List<ExteriorImgUrlDto> exteriorImgUrls;
    private List<InteriorImgUrlDto> interiorImgUrls;

    public TrimThumbnailColorResponse() {
    }


    public TrimThumbnailColorResponse(List<ExteriorImgUrlDto> exteriorImgUrls, List<InteriorImgUrlDto> interiorImgUrls) {
        this.exteriorImgUrls = exteriorImgUrls;
        this.interiorImgUrls = interiorImgUrls;
    }
}
