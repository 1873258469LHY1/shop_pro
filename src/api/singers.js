import request from '../utils/request'
//获取歌手列表

export const getAllSingerList = ({
  category,
  rn,
  pn,
  prefix
}) => {
  return request({
    method: 'GET',
    url: `singer?category=${category}&rn=${rn}&pn=${pn}&prefix=${prefix?prefix:''}`
  })
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