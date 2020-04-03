/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-26 10:36:46
 * @LastEditors: your name
 * @LastEditTime: 2020-04-02 21:21:23
 */
import { axios } from "@/utils/request";
import Qs from "qs";

export function getLatestRelease (parameter) {
  return axios({
    url: "sys/appUpdate/getLatestRelease",
    method: "post",
    data: Qs.stringify(parameter)
  });
}

/**
 *
 *
 * @export 根据字典名称查询字典（form传值）
 * @param {any} parameter
 * @returns
 */
export function findDictByType (parameter) {
  return axios({
    url: 'sys/sysDict/findDictByType',
    method: 'post',
    data: Qs.stringify(parameter)
  })
}

/**
 *
 *
 * @export 申请入驻（form传值）
 * @param {any} parameter
 * @returns
 */
export function applicationForEntry (parameter) {
  return axios({
    url: 'inviteConsult/applicationForEntry',
    method: 'post',
    data: Qs.stringify(parameter)
  })
}
/**
 *
 *
 * @export 获取邀请码信息（form传值）
 * @param {any} parameter
 * @returns
 */
export function getCodeInfo (parameter) {
  return axios({
    url: 'inviteCode/getCodeInfo',
    method: 'post',
    data: Qs.stringify(parameter)
  })
}
/**
 *
 *
 * @export 推广统计-点击量累加（form传值）
 * @param {any} parameter
 * @returns
 */
export function increaseClickRate (parameter) {
  return axios({
    url: 'inviteStatistics/increaseClickRate',
    method: 'post',
    data: Qs.stringify(parameter)
  })
}
