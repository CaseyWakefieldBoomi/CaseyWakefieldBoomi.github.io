!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 100));
})({
  0: function (e, t) {
    e.exports = React;
  },
  100: function (e, t, n) {
    "use strict";
    var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
      a = n(2),
      u = n(26),
      l = function (e) {
        var t =
          e.getAttribute("show progress") || e.getAttribute("showProgress");
        return manywho.utils.isEqual(t, "true", !0)
          ? i.createElement(
              "span",
              { className: "outcome-timer" },
              "Triggering outcome in ",
              e.remaining,
              " seconds"
            )
          : null;
      };
    manywho.component.register(
      "outcome-timer",
      a.component(
        u.timer(l, function (e) {
          return r(void 0, void 0, void 0, function () {
            var t, n;
            return o(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t =
                      e.getAttribute("outcome id") ||
                      e.getAttribute("refreshOutcomeId")),
                    (n = null),
                    manywho.utils.isNullOrWhitespace(t)
                      ? [3, 2]
                      : (n = manywho.model.getOutcome(t, e.flowKey))
                      ? [4, manywho.component.onOutcome(n, null, e.flowKey)]
                      : [3, 2]
                  );
                case 1:
                  return r.sent(), [2, !0];
                case 2:
                  return manywho.utils.isNullOrWhitespace(t) || !n
                    ? [2, !0]
                    : [2, !1];
              }
            });
          });
        })
      ),
      ["OutcomeTimer", "outcome_timer"]
    ),
      (t.default = l);
  },
  2: function (e, t, n) {
    "use strict";
    var r =
        (this && this.__makeTemplateObject) ||
        function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        },
      o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      i = this;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a,
      u,
      l = n(0),
      c = n(3),
      s = n(5),
      f = n(6),
      p = function (e, t, n) {
        var r = manywho.model.getItem(e, n),
          o = manywho.model.getOutcomes(e, n);
        return {
          className: manywho.styling.getClasses(
            t,
            e,
            r.componentType || r.containerType,
            n
          ),
          flowKey: n,
          id: e,
          model: r,
          outcomes:
            o &&
            o.map(function (e) {
              return l.createElement(manywho.component.getByName("outcome"), {
                id: e.id,
                flowKey: n,
              });
            }),
          parentId: t,
        };
      };
    (t.container = function (e) {
      return function (t) {
        var n = t.id,
          i = t.parentId,
          u = t.flowKey,
          c = manywho.model.getContainer(n, u),
          s = manywho.model.getChildren(n, u),
          m = o(o({}, p(n, i, u)), {
            children: manywho.component.getChildComponents(s, n, u),
          });
        return (
          manywho.log.debug(
            f(
              a ||
                (a = r(
                  [
                    "\n            Rendering Container\n            Name: ",
                    "\n            Type: ",
                    "\n            Order: ",
                    "\n        ",
                  ],
                  [
                    "\n            Rendering Container\n            Name: ",
                    "\n            Type: ",
                    "\n            Order: ",
                    "\n        ",
                  ]
                )),
              c.developerName,
              c.containerType,
              c.order
            )
          ),
          l.createElement(e, m)
        );
      };
    }),
      (t.component = function (e, t) {
        return (
          void 0 === t && (t = !1),
          function (n) {
            var a = n.id,
              m = n.parentId,
              d = n.flowKey,
              h = manywho.model.getComponent(a, d),
              y = function (e) {
                void 0 === e && (e = !0);
                var t = manywho.state.getComponent(a, d);
                manywho.state.setComponent(
                  a,
                  manywho.validation.validate(h, t, d),
                  d,
                  e
                );
              },
              v = o(o({}, p(a, m, d)), {
                getAttribute: function (e) {
                  if (h && h.attributes) {
                    var t = Object.keys(h.attributes).filter(function (t) {
                      return manywho.utils.isEqual(t, e, !0);
                    })[0];
                    if (t) return h.attributes[t];
                  }
                  return null;
                },
                getContentValue: function () {
                  var e = manywho.state.getComponent(a, d);
                  return e && void 0 !== e.contentValue
                    ? e.contentValue
                    : h.contentValue;
                },
                getObjectData: function (e) {
                  return e.objectData
                    ? e.objectData.map(function (e) {
                        return s.addProperties(e);
                      })
                    : null;
                },
                onChange: function (e, t, n) {
                  void 0 === t && (t = !0),
                    void 0 === n && (n = !0),
                    manywho.state.setComponent(a, { contentValue: e }, d, n),
                    t && y(n);
                },
                onEvent: function (e) {
                  manywho.component.handleEvent(i, h, d, e);
                },
                onLoad: function (e, t, n, r, o, i) {
                  void 0 === e && (e = null),
                    void 0 === t && (t = 0),
                    void 0 === n && (n = 0),
                    void 0 === r && (r = null),
                    void 0 === o && (o = "ASC"),
                    void 0 === i && (i = null);
                  var u = h.objectDataRequest
                    ? "objectDataRequest"
                    : h.fileDataRequest
                    ? "fileDataRequest"
                    : null;
                  if (u) {
                    var l = JSON.parse(JSON.stringify(h[u]));
                    return (
                      i && (l.listFilter.where = l.listFilter.where.concat(i)),
                      manywho.engine[u](a, l, d, n, e, r, o, t)
                    );
                  }
                },
                onSelect: function (e, t, n) {
                  void 0 === t && (t = !0),
                    void 0 === n && (n = !0),
                    Array.isArray(e) || (e = [e]),
                    Array.isArray(e) &&
                      !h.isMultiSelect &&
                      e.length > 1 &&
                      (e = [e[0]]),
                    manywho.state.setComponent(
                      a,
                      {
                        objectData: s.removeProperties(
                          (e || []).map(function (e) {
                            "string" == typeof e &&
                              (e = h.objectData.filter(function (t) {
                                return manywho.utils.isEqual(
                                  t.externalId,
                                  e,
                                  !0
                                );
                              })[0]);
                            var t = JSON.parse(JSON.stringify(e));
                            return (t.isSelected = !0), t;
                          })
                        ),
                      },
                      d,
                      n
                    ),
                    t && y(n);
                },
                state: manywho.state.getComponent(a, d),
              });
            return (
              manywho.log.debug(
                f(
                  u ||
                    (u = r(
                      [
                        "\n            Rendering Component\n            Name: ",
                        "\n            Type: ",
                        "\n            Order: ",
                        "\n        ",
                      ],
                      [
                        "\n            Rendering Component\n            Name: ",
                        "\n            Type: ",
                        "\n            Order: ",
                        "\n        ",
                      ]
                    )),
                  h.developerName,
                  h.componentType,
                  h.order
                )
              ),
              t && manywho.settings.isDebugEnabled(d)
                ? c.debugComponent(e, v)
                : l.createElement(e, v)
            );
          }
        );
      });
  },
  26: function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
      u =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var l = n(0);
    t.timer = function (e, t) {
      return (function (n) {
        function r() {
          var e = (null !== n && n.apply(this, arguments)) || this;
          return (
            (e.startTimer = function () {
              var t =
                e.props.getAttribute("wait") ||
                e.props.getAttribute("refreshIntervalSeconds");
              (e.remaining = manywho.utils.isNullOrWhitespace(t)
                ? 10
                : parseInt(t, 10)),
                (e.timer = setInterval(e.onTimer, 1e3)),
                e.forceUpdate();
            }),
            (e.restartTimer = function () {
              var t = e.props.getAttribute("repeat");
              manywho.utils.isEqual(t, "true", !0) && e.startTimer();
            }),
            (e.onTimer = function () {
              return a(e, void 0, void 0, function () {
                return u(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.remaining > 0
                        ? (this.remaining--, this.forceUpdate(), [3, 3])
                        : [3, 1];
                    case 1:
                      return (
                        clearInterval(this.timer),
                        (this.timer = null),
                        [4, t(this.props)]
                      );
                    case 2:
                      e.sent() && this.restartTimer(), (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        }
        return (
          o(r, n),
          (r.prototype.componentDidMount = function () {
            this.startTimer();
          }),
          (r.prototype.componentWillUnmount = function () {
            clearInterval(this.timer);
          }),
          (r.prototype.render = function () {
            return l.createElement(
              e,
              i({}, this.props, { remaining: this.remaining })
            );
          }),
          r
        );
      })(l.Component);
    };
  },
  3: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    n(4);
    var o = function (e, t, n) {
      return r.createElement(
        "div",
        {
          className: "modal-debug",
          id: e.id + "-" + n,
          tabIndex: -1,
          role: "dialog",
        },
        r.createElement(
          "div",
          null,
          r.createElement(
            "a",
            { href: "#", title: "Close", className: "modal-close" },
            "Close"
          ),
          r.createElement("h4", null, n, " - ", e.developerName),
          r.createElement("pre", null, JSON.stringify(t, null, 4))
        )
      );
    };
    t.debugComponent = function (e, t) {
      return r.createElement(
        "div",
        { className: "debug-component" },
        r.createElement(
          "div",
          null,
          r.createElement("span", null, t.model.developerName),
          r.createElement("span", null, t.model.id),
          r.createElement("a", { href: "#" + t.model.id + "-model" }, "Model"),
          r.createElement("a", { href: "#" + t.model.id + "-state" }, "State")
        ),
        r.createElement(e, t),
        o(t.model, t.model, "model"),
        o(t.model, t.state, "state")
      );
    };
  },
  4: function (e, t, n) {},
  5: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = [
      "developerName",
      "externalId",
      "internalId",
      "properties",
      "isSelected",
      "order",
    ];
    (t.removeProperties = function (e) {
      return e.map(function (e) {
        return (
          Object.keys(e)
            .filter(function (e) {
              return -1 === r.indexOf(e);
            })
            .forEach(function (t) {
              return delete e[t];
            }),
          e.properties &&
            (e.properties = e.properties.map(function (e) {
              return (
                e.objectData &&
                  (e.objectData = t.removeProperties(e.objectData)),
                e
              );
            })),
          e
        );
      });
    }),
      (t.addProperties = function (e) {
        return (
          e.properties.forEach(function (n) {
            e.hasOwnProperty(n.developerName) ||
              Object.defineProperty(e, n.developerName, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return n.objectData
                    ? n.objectData.map(function (e) {
                        return t.addProperties(e);
                      })
                    : n.contentValue;
                },
                set: function (e) {
                  Array.isArray(e)
                    ? (n.objectData = t.removeProperties(e))
                    : null == e
                    ? ((n.objectData = e), (n.contentValue = e))
                    : (n.contentValue = e);
                },
              });
          }),
          e
        );
      });
  },
  6: function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = void 0;
      t = "string" == typeof e ? [e] : e.raw;
      for (var n = "", r = 0; r < t.length; r++)
        (n += t[r].replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`")),
          r < (arguments.length <= 1 ? 0 : arguments.length - 1) &&
            (n += arguments.length <= r + 1 ? void 0 : arguments[r + 1]);
      var o = n.split("\n"),
        i = null;
      return (
        o.forEach(function (e) {
          var t = e.match(/^(\s+)\S+/);
          if (t) {
            var n = t[1].length;
            i = i ? Math.min(i, n) : n;
          }
        }),
        null !== i &&
          (n = o
            .map(function (e) {
              return " " === e[0] ? e.slice(i) : e;
            })
            .join("\n")),
        (n = n.trim()).replace(/\\n/g, "\n")
      );
    };
  },
});
//# sourceMappingURL=outcome-timer.js.map
