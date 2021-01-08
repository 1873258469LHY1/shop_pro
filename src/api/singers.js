import request from '../utils/request'
//获取歌手列表

export const getAllSingerList = ({
    category,
    rn,
    pn,
    prefix
}) => {
    if (prefix) {
        return request({
            method: 'GET',
            url: `singer?category=${category}&rn=${rn}&pn=${pn}&prefix=${prefix}`,
        })
    } else {
        return request({
            method: 'GET',
            url: `singer?category=${category}&rn=${rn}&pn=${pn}`,
        })
    }

}

// 歌手单曲列表
export const getSingleList = ({
    artistid,
    rn,
    pn
}) => {
    return request({
        method: 'GET',
        url: `/singer/music?artistid=${artistid}&rn=${rn}&pn=${pn}`,

    })
}

//获取歌曲播放地址
export const getMusicUrl = (rid) => {
    return request({
        method: 'GET',
        url: `/url?rid=${rid}`,

    })
}
// 获取歌词
export const getWords = (musicId) => {
    console.log(222,musicId);
    return request({
        method: 'GET',
        url: `/lrc?musicId=${musicId}`,

    })
}