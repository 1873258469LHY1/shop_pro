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

//歌单分类Tag
export const getPlayListTags = () => {
  return request({
    method: 'GET',
    url: 'playList_tags',
  })
}

// 获取歌单分类列表
export const getCategoryPlayList = ({
  tagId,
  rn,
  pn
}) => {
  return request({
    method: 'GET',
    url: `/playList/category?id=${tagId}`,
    params: {
      rn,
      pn
    }
  })
}