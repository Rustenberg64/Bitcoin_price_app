module UserHelper
  def date_floor_sec
    time = Time.current.floor
    time -= time.sec
    time
  end
end