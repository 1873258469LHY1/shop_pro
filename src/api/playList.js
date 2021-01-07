import request from '../utils/request'

//获取歌单

export const getPlayList = ({
  order,
  rn,
  pn
}) => {
  return request({
    method: 'GET',
    url: `playList?order=${order}&rn=${rn}&pn=${pn}`,
  })
}