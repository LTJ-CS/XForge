export enum NetConsts {
  /**被系统关闭踢出 */
  KickReasonBySystemStop = 0,
  /**被管理员踢出 */
  KickReasonByAdmin = 1,
  /**被用户自己另一个地方登录踢出 */
  KickReasonByUserLogin = 2,
  /**被用户自己掉线 */
  KickReasonByUserLogout = 3,
  /**被其他服务注册长连接 */
  KickReasonByOtherGate = 4,
  /**被用户自己另一个地方登录踢出 */
  KickReasonByUserLoginSession = 5,
}
