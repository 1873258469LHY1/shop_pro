import request from '../utils/request'

//获取歌单歌曲列表
export const getPlaylistSongList = ({
  pid,
  rn,
  pn
}) => {
  return request({
    method: 'GET',
    url: `/musicList?pid=${pid}&rn=${rn}&pn=${pn}`
  })
}