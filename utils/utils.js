module.exports = {
  fixedDecimal: function (t, n) {
    return t.toFixed(n);
  },
  formatDay: function () {
    var t = {}, n = new Date(), e = n.getFullYear(), r = n.getMonth() + 1, a = n.getDate(), o = !1, i = +new Date(e, 0, 1, 0, 0, 0), u = n.getTime();
    t.year = e, t.month = r, t.day = a, t.past_days = (u - i) / 864e5 >> 0;
    var s = new Date();
    s.setMonth(r), s.setDate(0), t.month_total = s.getDate(), o = 0 == e % 4 && 0 == e % 100 || 0 == e % 400,
      t.year_total = o ? 366 : 365;
    var h = new Date();
    return h.setHours(0, 0, 0, 0), t.past_time = +new Date() - h.getTime(), t;
  }
};