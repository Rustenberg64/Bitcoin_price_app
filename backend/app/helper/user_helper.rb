# sidekiqで用いるHelperを書く
module UserHelper
  # データベースに保存する際に秒数を切り捨てたものを使用する
  def date_floor_sec
    time = Time.current.floor
    time -= time.sec
    time
  end
end
