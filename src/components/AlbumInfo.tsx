import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getAlbumInfo } from "../api";
import { clickedAlbumState } from "../atoms";
import { albumInfoType } from "../type";

export default function AlbumInfo(){
    const clickedAlbum = useRecoilValue(clickedAlbumState);
    const {artist, name, image} = clickedAlbum;
    const {data, status} = useQuery<albumInfoType>(["albumInfo", clickedAlbum.name, clickedAlbum.artist],
        () => getAlbumInfo(name, artist),
        { enabled: !!clickedAlbum.name }
    );
    const coverPath = [
        image[3]?.['#text'],
        image[2]?.['#text'],
        image[1]?.['#text'],
        image[0]?.['#text']
    ].filter(Boolean).join(',');
    return <>
         <Container>
            <CoverWrapper>
                <Cover path={coverPath}/>
            </CoverWrapper>
            <TitleWrapper>
                <div style={{fontWeight : "bold"}}>{name || ""}</div>
                <div>{artist || ""}</div>
            </TitleWrapper>
            {
            status === "success" &&
            <Tracks>
                {
                    data?.tracks?.track.map((item, key)=> <Track key={key}>
                        <TrackInfo>
                            <Number>{`${item["@attr"].rank}.`}</Number>
                            <Title>{item.name}</Title>
                        </TrackInfo>
                        {item.duration && <div>{`${Math.floor((item.duration / 60))}:${item.duration % 60 < 10? "0" + item.duration % 60 : item.duration % 60}`}</div>}
                    </Track>)
                }
            </Tracks>
            }
        </Container>
    </>
}
const Container = styled.div`
    width: 430px;
    padding: 0 2rem, 2.5rem, 2.5rem;
    /* margin-left: 0.75rem; */
`
const CoverWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Cover = styled.div<{path: string}>`
    width: 340px;
    height: 340px;
    border-radius: 0.5rem/* 8px */;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.path});
`
const TitleWrapper = styled.div`
    text-align: center;
    margin-top: 0.75rem/* 12px */;
    margin-bottom: 0.75rem/* 12px */;
    font-size: 0.75rem/* 12px */;
    line-height: 1rem/* 16px */;
`
const Number = styled.div`
    width: 1.25rem/* 20px */;
`
const Title = styled.div`
    padding-left: 0.25rem/* 4px */;
    padding-right: 0.25rem/* 4px */;
`
const Tracks = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.75rem/* 12px */;
    line-height: 1rem/* 16px */;
`
const Track = styled.div`
    display: flex;
    justify-content: space-between;
`
const TrackInfo = styled.div`
    display: flex;
    flex-direction: row;
`
