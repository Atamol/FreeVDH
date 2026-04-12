var Jt = Object.create;
var tt = Object.defineProperty;
var Qt = Object.getOwnPropertyDescriptor;
var Zt = Object.getOwnPropertyNames;
var er = Object.getPrototypeOf,
  tr = Object.prototype.hasOwnProperty;
var rt = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var rr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ar = (e, t, r, a) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of Zt(t))
      !tr.call(e, i) &&
        i !== r &&
        tt(e, i, { get: () => t[i], enumerable: !(a = Qt(t, i)) || a.enumerable });
  return e;
};
var ir = (e, t, r) => (
  (r = e != null ? Jt(er(e)) : {}),
  ar(t || !e || !e.__esModule ? tt(r, "default", { value: e, enumerable: !0 }) : r, e)
);
var At = rr((Co, pt) => {
  var ge;
  typeof window < "u"
    ? (ge = window)
    : typeof global < "u"
      ? (ge = global)
      : typeof self < "u"
        ? (ge = self)
        : (ge = {});
  pt.exports = ge;
});
var D = {};
(function () {
  function e(n) {
    if (
      ((n = n || [0, 97, 115, 109, 1, 0, 0, 0]),
      typeof WebAssembly != "object" || typeof WebAssembly.instantiate != "function")
    )
      return !1;
    try {
      var n = new WebAssembly.Module(new Uint8Array(n));
      if (n instanceof WebAssembly.Module)
        return new WebAssembly.Instance(n) instanceof WebAssembly.Instance;
    } catch {}
    return !1;
  }
  function t() {
    try {
      var n = new WebAssembly.Memory({ initial: 1, maximum: 1, shared: !0 });
      return n.buffer instanceof SharedArrayBuffer;
    } catch {}
    return !1;
  }
  var r = typeof process < "u";
  (D.base || ((D.base = import.meta.url), (D.base = D.base.replace(/\/[^\/]*$/, ""))),
    (D.isWebAssemblySupported = e),
    (D.isThreadingSupported = t));
  function a(n) {
    n = n || {};
    var l = !n.nowasm && e(),
      d = n.yesthreads && l && !n.nothreads && t();
    return l ? (d ? "thr" : "wasm") : "asm";
  }
  ((D.target = a),
    (D.VER = "6.5.7.1"),
    (D.CONFIG = "h264-aac-mp3"),
    (D.DBG = ""),
    (D.factories = {}));
  var i = {};
  ((i.i64tof64 = function (n, l) {
    return (!l && n >= 0) || (l === -1 && n < 0)
      ? n
      : l * 4294967296 + n + (n < 0 ? 4294967296 : 0);
  }),
    (i.f64toi64 = function (n) {
      return [~~n, Math.floor(n / 4294967296)];
    }),
    (i.i64ToBigInt = function (n, l) {
      var d = new DataView(new ArrayBuffer(8));
      return (d.setInt32(0, n, !0), d.setInt32(4, l, !0), d.getBigInt64(0, !0));
    }),
    (i.bigIntToi64 = function (n) {
      var l = new DataView(new ArrayBuffer(8));
      return (l.setBigInt64(0, n, !0), [l.getInt32(0, !0), l.getInt32(4, !0)]);
    }),
    (i.ff_channel_layout = function (n) {
      return n.channel_layout
        ? n.channel_layout
        : n.channels && n.channels !== 1
          ? (1 << n.channels) - 1
          : 4;
    }),
    (i.ff_channels = function (n) {
      if (n.channels) return n.channels;
      if (n.channel_layout) {
        for (var l = 0, d = n.channel_layout; d; ) ((l += d & 1), (d >>= 1));
        return l;
      } else return 1;
    }));
  function o(n, l) {
    typeof l === void 0 && (l = 0);
    var d = l;
    n.forEach(function (_) {
      i[_] = d++;
    });
  }
  ((i.AV_TIME_BASE = 1e6),
    (i.AV_OPT_SEARCH_CHILDREN = 1),
    o(
      [
        "AVMEDIA_TYPE_UNKNOWN",
        "AVMEDIA_TYPE_VIDEO",
        "AVMEDIA_TYPE_AUDIO",
        "AVMEDIA_TYPE_DATA",
        "AVMEDIA_TYPE_SUBTITLE",
        "AVMEDIA_TYPE_ATTACHMENT",
      ],
      -1,
    ),
    o(
      [
        "AV_SAMPLE_FMT_NONE",
        "AV_SAMPLE_FMT_U8",
        "AV_SAMPLE_FMT_S16",
        "AV_SAMPLE_FMT_S32",
        "AV_SAMPLE_FMT_FLT",
        "AV_SAMPLE_FMT_DBL",
        "AV_SAMPLE_FMT_U8P",
        "AV_SAMPLE_FMT_S16P",
        "AV_SAMPLE_FMT_S32P",
        "AV_SAMPLE_FMT_FLTP",
        "AV_SAMPLE_FMT_DBLP",
        "AV_SAMPLE_FMT_S64",
        "AV_SAMPLE_FMT_S64P",
        "AV_SAMPLE_FMT_NB",
      ],
      -1,
    ),
    o(
      [
        "AV_PIX_FMT_NONE",
        "AV_PIX_FMT_YUV420P",
        "AV_PIX_FMT_YUYV422",
        "AV_PIX_FMT_RGB24",
        "AV_PIX_FMT_BGR24",
        "AV_PIX_FMT_YUV422P",
        "AV_PIX_FMT_YUV444P",
        "AV_PIX_FMT_YUV410P",
        "AV_PIX_FMT_YUV411P",
        "AV_PIX_FMT_GRAY8",
        "AV_PIX_FMT_MONOWHITE",
        "AV_PIX_FMT_MONOBLACK",
        "AV_PIX_FMT_PAL8",
        "AV_PIX_FMT_YUVJ420P",
        "AV_PIX_FMT_YUVJ422P",
        "AV_PIX_FMT_YUVJ444P",
        "AV_PIX_FMT_UYVY422",
        "AV_PIX_FMT_UYYVYY411",
        "AV_PIX_FMT_BGR8",
        "AV_PIX_FMT_BGR4",
        "AV_PIX_FMT_BGR4_BYTE",
        "AV_PIX_FMT_RGB8",
        "AV_PIX_FMT_RGB4",
        "AV_PIX_FMT_RGB4_BYTE",
        "AV_PIX_FMT_NV12",
        "AV_PIX_FMT_NV21",
        "AV_PIX_FMT_ARGB",
        "AV_PIX_FMT_RGBA",
        "AV_PIX_FMT_ABGR",
        "AV_PIX_FMT_BGRA",
        "AV_PIX_FMT_GRAY16BE",
        "AV_PIX_FMT_GRAY16LE",
        "AV_PIX_FMT_YUV440P",
        "AV_PIX_FMT_YUVJ440P",
        "AV_PIX_FMT_YUVA420P",
        "AV_PIX_FMT_RGB48BE",
        "AV_PIX_FMT_RGB48LE",
        "AV_PIX_FMT_RGB565BE",
        "AV_PIX_FMT_RGB565LE",
        "AV_PIX_FMT_RGB555BE",
        "AV_PIX_FMT_RGB555LE",
        "AV_PIX_FMT_BGR565BE",
        "AV_PIX_FMT_BGR565LE",
        "AV_PIX_FMT_BGR555BE",
        "AV_PIX_FMT_BGR555LE",
      ],
      -1,
    ),
    (i.AVIO_FLAG_READ = 1),
    (i.AVIO_FLAG_WRITE = 2),
    (i.AVIO_FLAG_READ_WRITE = 3),
    (i.AVIO_FLAG_NONBLOCK = 8),
    (i.AVIO_FLAG_DIRECT = 32768),
    (i.AVFMT_FLAG_NOBUFFER = 64),
    (i.AVFMT_FLAG_FLUSH_PACKETS = 512),
    (i.AVSEEK_FLAG_BACKWARD = 1),
    (i.AVSEEK_FLAG_BYTE = 2),
    (i.AVSEEK_FLAG_ANY = 4),
    (i.AVSEEK_FLAG_FRAME = 8),
    (i.AVDISCARD_NONE = -16),
    (i.AVDISCARD_DEFAULT = 0),
    (i.AVDISCARD_NONREF = 8),
    (i.AVDISCARD_BIDIR = 16),
    (i.AVDISCARD_NONINTRA = 24),
    (i.AVDISCARD_NONKEY = 32),
    (i.AVDISCARD_ALL = 48),
    (i.AV_LOG_QUIET = -8),
    (i.AV_LOG_PANIC = 0),
    (i.AV_LOG_FATAL = 8),
    (i.AV_LOG_ERROR = 16),
    (i.AV_LOG_WARNING = 24),
    (i.AV_LOG_INFO = 32),
    (i.AV_LOG_VERBOSE = 40),
    (i.AV_LOG_DEBUG = 48),
    (i.AV_LOG_TRACE = 56),
    (i.AV_PKT_FLAG_KEY = 1),
    (i.AV_PKT_FLAG_CORRUPT = 2),
    (i.AV_PKT_FLAG_DISCARD = 4),
    (i.AV_PKT_FLAG_TRUSTED = 8),
    (i.AV_PKT_FLAG_DISPOSABLE = 16),
    o(
      [
        "E2BIG",
        "EPERM",
        "EADDRINUSE",
        "EADDRNOTAVAIL",
        "EAFNOSUPPORT",
        "EAGAIN",
        "EALREADY",
        "EBADF",
        "EBADMSG",
        "EBUSY",
        "ECANCELED",
        "ECHILD",
        "ECONNABORTED",
        "ECONNREFUSED",
        "ECONNRESET",
        "EDEADLOCK",
        "EDESTADDRREQ",
        "EDOM",
        "EDQUOT",
        "EEXIST",
        "EFAULT",
        "EFBIG",
        "EHOSTUNREACH",
        "EIDRM",
        "EILSEQ",
        "EINPROGRESS",
        "EINTR",
        "EINVAL",
        "EIO",
        "EISCONN",
        "EISDIR",
        "ELOOP",
        "EMFILE",
        "EMLINK",
        "EMSGSIZE",
        "EMULTIHOP",
        "ENAMETOOLONG",
        "ENETDOWN",
        "ENETRESET",
        "ENETUNREACH",
        "ENFILE",
        "ENOBUFS",
        "ENODEV",
        "ENOENT",
      ],
      1,
    ),
    (i.AVERROR_EOF = -541478725),
    Object.assign(D, i),
    (D.LibAV = function (n) {
      n = n || {};
      var l = n.base || D.base,
        d = a(n),
        _ = "h264-aac-mp3";
      d === "asm" && (_ = n.variant || D.variant || "h264-aac-mp3");
      var u = !0;
      u && (n.noes6 || D.noes6) && (u = !1);
      var p =
          n.toImport ||
          D.toImport ||
          l + "/libav-6.5.7.1-" + _ + "." + d + "." + (u ? "mjs" : "js"),
        c,
        y = "direct";
      return (
        d === "thr" ? (y = "threads") : !r && !n.noworker && typeof Worker < "u" && (y = "worker"),
        Promise.all([])
          .then(function () {
            if (n.factory || D.factory) return n.factory || D.factory;
            if (D.factories[p]) return D.factories[p];
            if (y !== "worker")
              return u
                ? import(p).then(function (A) {
                    return ((D.factories[p] = A.default), A.default);
                  })
                : r
                  ? (D.factories[p] = rt(p))
                  : typeof importScripts < "u"
                    ? (importScripts(p), (D.factories[p] = LibAVFactory))
                    : new Promise(function (A, s) {
                        var w = document.createElement("script");
                        ((w.src = p),
                          w.addEventListener("load", A),
                          w.addEventListener("error", s),
                          (w.async = !0),
                          document.body.appendChild(w));
                      }).then(function () {
                        return (D.factories[p] = LibAVFactory);
                      });
          })
          .then(function (A) {
            return y === "worker"
              ? ((c = {}),
                (c.worker = new Worker(p, { type: u ? "module" : "classic" })),
                c.worker.postMessage({
                  config: { variant: n.variant || D.variant, wasmurl: n.wasmurl || D.wasmurl },
                }),
                new Promise(function (s, w) {
                  ((c.on = 1),
                    (c.handlers = {
                      onready: [
                        function () {
                          s();
                        },
                        null,
                      ],
                      onwrite: [
                        function (m) {
                          c.onwrite && c.onwrite.apply(c, m);
                        },
                        null,
                      ],
                      onread: [
                        function (m) {
                          try {
                            var f = null;
                            (c.onread && (f = c.onread.apply(c, m)),
                              f &&
                                f.then &&
                                f.catch &&
                                f.catch(function (h) {
                                  c.ff_reader_dev_send(m[0], null, { error: h });
                                }));
                          } catch (h) {
                            c.ff_reader_dev_send(m[0], null, { error: h });
                          }
                        },
                        null,
                      ],
                      onblockread: [
                        function (m) {
                          try {
                            var f = null;
                            (c.onblockread && (f = c.onblockread.apply(c, m)),
                              f &&
                                f.then &&
                                f.catch &&
                                f.catch(function (h) {
                                  c.ff_block_reader_dev_send(m[0], m[1], null, { error: h });
                                }));
                          } catch (h) {
                            c.ff_block_reader_dev_send(m[0], m[1], null, { error: h });
                          }
                        },
                        null,
                      ],
                    }),
                    (c.c = function () {
                      for (
                        var m = Array.prototype.slice.call(arguments), f = [], h = 0;
                        h < m.length;
                        h++
                      )
                        m[h] && m[h].libavjsTransfer && f.push.apply(f, m[h].libavjsTransfer);
                      return new Promise(function (R, T) {
                        var V = c.on++;
                        ((m = [V].concat(m)), (c.handlers[V] = [R, T]), c.worker.postMessage(m, f));
                      });
                    }));
                  function E(m) {
                    var f = m.data[0],
                      h = c.handlers[f];
                    h &&
                      (m.data[2] ? h[0](m.data[3]) : h[1](m.data[3]),
                      typeof f == "number" && delete c.handlers[f]);
                  }
                  ((c.worker.onmessage = E),
                    (c.terminate = function () {
                      c.worker.terminate();
                    }));
                }))
              : y === "threads"
                ? Promise.all([])
                    .then(function () {
                      return A({
                        wasmurl: n.wasmurl || D.wasmurl,
                        variant: n.variant || D.variant,
                      });
                    })
                    .then(function (s) {
                      c = s;
                      var w = c.libavjs_create_main_thread(),
                        E = c.PThread.pthreads[w],
                        m = 0,
                        f = 1,
                        h = {},
                        R = null,
                        T = new Promise(function (b) {
                          R = b;
                        });
                      c.c = function () {
                        var b = Array.prototype.slice.call(arguments);
                        return new Promise(function (N, $) {
                          var x = f++;
                          ((b = [x].concat(b)),
                            (h[x] = [N, $]),
                            E.postMessage({ c: "libavjs_run", a: b }));
                        });
                      };
                      var V = E.onmessage;
                      return (
                        (E.onmessage = function (b) {
                          if (b.data && b.data.c === "libavjs_ret") {
                            var N = b.data.a,
                              $ = h[N[0]];
                            $ && (N[2] ? $[0](N[3]) : $[1](N[3]), delete h[N[0]]);
                          } else if (b.data && b.data.c === "libavjs_wait_reader")
                            if (c.readerDevReady(b.data.fd))
                              E.postMessage({ c: "libavjs_wait_reader", fd: b.data.fd });
                            else {
                              var x = c.fdName(b.data.fd),
                                I = c.ff_reader_dev_waiters[x];
                              (I || (I = c.ff_reader_dev_waiters[x] = []),
                                I.push(function () {
                                  E.postMessage({ c: "libavjs_wait_reader", fd: b.data.fd });
                                }));
                            }
                          else if (b.data && b.data.c === "libavjs_ready") R();
                          else return V.apply(this, arguments);
                        }),
                        (c.terminate = function () {
                          c.PThread.unusedWorkers
                            .concat(c.PThread.runningWorkers)
                            .forEach(function (b) {
                              b.terminate();
                            });
                        }),
                        T
                      );
                    })
                : Promise.all([])
                    .then(function () {
                      return A({
                        wasmurl: n.wasmurl || D.wasmurl,
                        variant: n.variant || D.variant,
                      });
                    })
                    .then(function (s) {
                      ((c = s),
                        (c.worker = !1),
                        (c.c = function (w) {
                          var E = Array.prototype.slice.call(arguments, 1);
                          return new Promise(function (m, f) {
                            try {
                              m(c[w].apply(c, E));
                            } catch (h) {
                              f(h);
                            }
                          });
                        }),
                        (c.terminate = function () {}));
                    });
          })
          .then(function () {
            function A(m) {
              m.forEach(function (f) {
                c[f] = function () {
                  return c.c.apply(c, [f].concat(Array.prototype.slice.call(arguments)));
                };
              });
            }
            function s(m) {
              m.forEach(function (f) {
                var h = (c[f + "_sync"] = c[f]);
                c[f] = function () {
                  var R = arguments;
                  return new Promise(function (T, V) {
                    try {
                      var b = h.apply(c, R);
                      typeof b == "object" && b !== null && b.then ? b.then(T).catch(V) : T(b);
                    } catch (N) {
                      V(N);
                    }
                  });
                };
              });
            }
            var w = [
                "av_get_bytes_per_sample",
                "av_compare_ts_js",
                "av_opt_set",
                "av_opt_set_int_list_js",
                "av_frame_alloc",
                "av_frame_clone",
                "av_frame_free",
                "av_frame_get_buffer",
                "av_frame_make_writable",
                "av_frame_ref",
                "av_frame_unref",
                "ff_frame_rescale_ts_js",
                "av_log_get_level",
                "av_log_set_level",
                "av_packet_alloc",
                "av_packet_clone",
                "av_packet_free",
                "av_packet_new_side_data",
                "av_packet_ref",
                "av_packet_rescale_ts_js",
                "av_packet_unref",
                "av_strdup",
                "av_buffersink_get_frame",
                "av_buffersink_get_time_base_num",
                "av_buffersink_get_time_base_den",
                "av_buffersink_set_frame_size",
                "ff_buffersink_set_ch_layout",
                "av_buffersrc_add_frame_flags",
                "avfilter_free",
                "avfilter_get_by_name",
                "avfilter_graph_alloc",
                "avfilter_graph_config",
                "avfilter_graph_create_filter_js",
                "avfilter_graph_free",
                "avfilter_graph_parse",
                "avfilter_inout_alloc",
                "avfilter_inout_free",
                "avfilter_link",
                "avcodec_alloc_context3",
                "avcodec_close",
                "avcodec_descriptor_get",
                "avcodec_descriptor_get_by_name",
                "avcodec_descriptor_next",
                "avcodec_find_decoder",
                "avcodec_find_decoder_by_name",
                "avcodec_find_encoder",
                "avcodec_find_encoder_by_name",
                "avcodec_flush_buffers",
                "avcodec_free_context",
                "avcodec_get_name",
                "avcodec_open2",
                "avcodec_open2_js",
                "avcodec_parameters_alloc",
                "avcodec_parameters_copy",
                "avcodec_parameters_free",
                "avcodec_parameters_from_context",
                "avcodec_parameters_to_context",
                "avcodec_receive_frame",
                "avcodec_receive_packet",
                "avcodec_send_frame",
                "avcodec_send_packet",
                "av_find_input_format",
                "avformat_alloc_context",
                "avformat_alloc_output_context2_js",
                "avformat_close_input",
                "avformat_find_stream_info",
                "avformat_flush",
                "avformat_free_context",
                "avformat_new_stream",
                "avformat_open_input",
                "avformat_open_input_js",
                "av_seek_frame",
                "avformat_seek_file",
                "avformat_seek_file_min",
                "avformat_seek_file_max",
                "avformat_seek_file_approx",
                "avformat_write_header",
                "avio_open2_js",
                "avio_close",
                "avio_flush",
                "av_find_best_stream",
                "av_get_sample_fmt_name",
                "av_grow_packet",
                "av_interleaved_write_frame",
                "av_packet_make_writable",
                "av_pix_fmt_desc_get",
                "av_read_frame",
                "av_shrink_packet",
                "av_write_frame",
                "av_write_trailer",
                "av_dict_copy_js",
                "av_dict_free",
                "av_dict_set_js",
                "sws_getContext",
                "sws_freeContext",
                "sws_scale_frame",
                "AVPacketSideData_data",
                "AVPacketSideData_size",
                "AVPacketSideData_type",
                "AVPixFmtDescriptor_comp_depth",
                "ff_error",
                "ff_nothing",
                "calloc",
                "close",
                "dup2",
                "free",
                "malloc",
                "mallinfo_uordblks",
                "open",
                "strerror",
                "libavjs_with_swscale",
                "libavjs_create_main_thread",
                "ffmpeg_main",
                "ffprobe_main",
                "ffmpeg_interrupt",
                "ffmpeg_get_out_time_ms",
                "ffmpeg_get_total_size_bytes",
                "jsfetch_set_read_timeout",
                "jsfetch_set_fetch_timeout",
                "jsfetch_set_initial_retry_delay",
                "jsfetch_set_bypass_cache",
                "AVFrame_channel_layout",
                "AVFrame_channel_layout_s",
                "AVFrame_channel_layouthi",
                "AVFrame_channel_layouthi_s",
                "AVFrame_channels",
                "AVFrame_channels_s",
                "AVFrame_channel_layoutmask",
                "AVFrame_channel_layoutmask_s",
                "AVFrame_ch_layout_nb_channels",
                "AVFrame_ch_layout_nb_channels_s",
                "AVFrame_crop_bottom",
                "AVFrame_crop_bottom_s",
                "AVFrame_crop_left",
                "AVFrame_crop_left_s",
                "AVFrame_crop_right",
                "AVFrame_crop_right_s",
                "AVFrame_crop_top",
                "AVFrame_crop_top_s",
                "AVFrame_data_a",
                "AVFrame_data_a_s",
                "AVFrame_format",
                "AVFrame_format_s",
                "AVFrame_height",
                "AVFrame_height_s",
                "AVFrame_key_frame",
                "AVFrame_key_frame_s",
                "AVFrame_linesize_a",
                "AVFrame_linesize_a_s",
                "AVFrame_nb_samples",
                "AVFrame_nb_samples_s",
                "AVFrame_pict_type",
                "AVFrame_pict_type_s",
                "AVFrame_pts",
                "AVFrame_pts_s",
                "AVFrame_ptshi",
                "AVFrame_ptshi_s",
                "AVFrame_sample_aspect_ratio_num",
                "AVFrame_sample_aspect_ratio_num_s",
                "AVFrame_sample_aspect_ratio_den",
                "AVFrame_sample_aspect_ratio_den_s",
                "AVFrame_sample_aspect_ratio_s",
                "AVFrame_sample_rate",
                "AVFrame_sample_rate_s",
                "AVFrame_time_base_num",
                "AVFrame_time_base_num_s",
                "AVFrame_time_base_den",
                "AVFrame_time_base_den_s",
                "AVFrame_time_base_s",
                "AVFrame_width",
                "AVFrame_width_s",
                "AVPixFmtDescriptor_flags",
                "AVPixFmtDescriptor_flags_s",
                "AVPixFmtDescriptor_log2_chroma_h",
                "AVPixFmtDescriptor_log2_chroma_h_s",
                "AVPixFmtDescriptor_log2_chroma_w",
                "AVPixFmtDescriptor_log2_chroma_w_s",
                "AVPixFmtDescriptor_nb_components",
                "AVPixFmtDescriptor_nb_components_s",
                "AVCodec_name",
                "AVCodec_sample_fmts",
                "AVCodec_sample_fmts_s",
                "AVCodec_sample_fmts_a",
                "AVCodec_sample_fmts_a_s",
                "AVCodec_supported_samplerates",
                "AVCodec_supported_samplerates_s",
                "AVCodec_supported_samplerates_a",
                "AVCodec_supported_samplerates_a_s",
                "AVCodec_type",
                "AVCodec_type_s",
                "AVCodecContext_codec_id",
                "AVCodecContext_codec_id_s",
                "AVCodecContext_codec_type",
                "AVCodecContext_codec_type_s",
                "AVCodecContext_bit_rate",
                "AVCodecContext_bit_rate_s",
                "AVCodecContext_bit_ratehi",
                "AVCodecContext_bit_ratehi_s",
                "AVCodecContext_channel_layout",
                "AVCodecContext_channel_layout_s",
                "AVCodecContext_channel_layouthi",
                "AVCodecContext_channel_layouthi_s",
                "AVCodecContext_channels",
                "AVCodecContext_channels_s",
                "AVCodecContext_channel_layoutmask",
                "AVCodecContext_channel_layoutmask_s",
                "AVCodecContext_ch_layout_nb_channels",
                "AVCodecContext_ch_layout_nb_channels_s",
                "AVCodecContext_extradata",
                "AVCodecContext_extradata_s",
                "AVCodecContext_extradata_size",
                "AVCodecContext_extradata_size_s",
                "AVCodecContext_frame_size",
                "AVCodecContext_frame_size_s",
                "AVCodecContext_framerate_num",
                "AVCodecContext_framerate_num_s",
                "AVCodecContext_framerate_den",
                "AVCodecContext_framerate_den_s",
                "AVCodecContext_framerate_s",
                "AVCodecContext_gop_size",
                "AVCodecContext_gop_size_s",
                "AVCodecContext_height",
                "AVCodecContext_height_s",
                "AVCodecContext_keyint_min",
                "AVCodecContext_keyint_min_s",
                "AVCodecContext_level",
                "AVCodecContext_level_s",
                "AVCodecContext_max_b_frames",
                "AVCodecContext_max_b_frames_s",
                "AVCodecContext_pix_fmt",
                "AVCodecContext_pix_fmt_s",
                "AVCodecContext_profile",
                "AVCodecContext_profile_s",
                "AVCodecContext_rc_max_rate",
                "AVCodecContext_rc_max_rate_s",
                "AVCodecContext_rc_max_ratehi",
                "AVCodecContext_rc_max_ratehi_s",
                "AVCodecContext_rc_min_rate",
                "AVCodecContext_rc_min_rate_s",
                "AVCodecContext_rc_min_ratehi",
                "AVCodecContext_rc_min_ratehi_s",
                "AVCodecContext_sample_aspect_ratio_num",
                "AVCodecContext_sample_aspect_ratio_num_s",
                "AVCodecContext_sample_aspect_ratio_den",
                "AVCodecContext_sample_aspect_ratio_den_s",
                "AVCodecContext_sample_aspect_ratio_s",
                "AVCodecContext_sample_fmt",
                "AVCodecContext_sample_fmt_s",
                "AVCodecContext_sample_rate",
                "AVCodecContext_sample_rate_s",
                "AVCodecContext_time_base_num",
                "AVCodecContext_time_base_num_s",
                "AVCodecContext_time_base_den",
                "AVCodecContext_time_base_den_s",
                "AVCodecContext_time_base_s",
                "AVCodecContext_qmax",
                "AVCodecContext_qmax_s",
                "AVCodecContext_qmin",
                "AVCodecContext_qmin_s",
                "AVCodecContext_width",
                "AVCodecContext_width_s",
                "AVCodecDescriptor_id",
                "AVCodecDescriptor_id_s",
                "AVCodecDescriptor_long_name",
                "AVCodecDescriptor_long_name_s",
                "AVCodecDescriptor_mime_types_a",
                "AVCodecDescriptor_mime_types_a_s",
                "AVCodecDescriptor_name",
                "AVCodecDescriptor_name_s",
                "AVCodecDescriptor_props",
                "AVCodecDescriptor_props_s",
                "AVCodecDescriptor_type",
                "AVCodecDescriptor_type_s",
                "AVCodecParameters_bit_rate",
                "AVCodecParameters_bit_rate_s",
                "AVCodecParameters_channel_layoutmask",
                "AVCodecParameters_channel_layoutmask_s",
                "AVCodecParameters_channels",
                "AVCodecParameters_channels_s",
                "AVCodecParameters_ch_layout_nb_channels",
                "AVCodecParameters_ch_layout_nb_channels_s",
                "AVCodecParameters_chroma_location",
                "AVCodecParameters_chroma_location_s",
                "AVCodecParameters_codec_id",
                "AVCodecParameters_codec_id_s",
                "AVCodecParameters_codec_tag",
                "AVCodecParameters_codec_tag_s",
                "AVCodecParameters_codec_type",
                "AVCodecParameters_codec_type_s",
                "AVCodecParameters_color_primaries",
                "AVCodecParameters_color_primaries_s",
                "AVCodecParameters_color_range",
                "AVCodecParameters_color_range_s",
                "AVCodecParameters_color_space",
                "AVCodecParameters_color_space_s",
                "AVCodecParameters_color_trc",
                "AVCodecParameters_color_trc_s",
                "AVCodecParameters_extradata",
                "AVCodecParameters_extradata_s",
                "AVCodecParameters_extradata_size",
                "AVCodecParameters_extradata_size_s",
                "AVCodecParameters_format",
                "AVCodecParameters_format_s",
                "AVCodecParameters_framerate_num",
                "AVCodecParameters_framerate_num_s",
                "AVCodecParameters_framerate_den",
                "AVCodecParameters_framerate_den_s",
                "AVCodecParameters_framerate_s",
                "AVCodecParameters_height",
                "AVCodecParameters_height_s",
                "AVCodecParameters_level",
                "AVCodecParameters_level_s",
                "AVCodecParameters_profile",
                "AVCodecParameters_profile_s",
                "AVCodecParameters_sample_rate",
                "AVCodecParameters_sample_rate_s",
                "AVCodecParameters_width",
                "AVCodecParameters_width_s",
                "AVPacket_data",
                "AVPacket_data_s",
                "AVPacket_dts",
                "AVPacket_dts_s",
                "AVPacket_dtshi",
                "AVPacket_dtshi_s",
                "AVPacket_duration",
                "AVPacket_duration_s",
                "AVPacket_durationhi",
                "AVPacket_durationhi_s",
                "AVPacket_flags",
                "AVPacket_flags_s",
                "AVPacket_pos",
                "AVPacket_pos_s",
                "AVPacket_poshi",
                "AVPacket_poshi_s",
                "AVPacket_pts",
                "AVPacket_pts_s",
                "AVPacket_ptshi",
                "AVPacket_ptshi_s",
                "AVPacket_side_data",
                "AVPacket_side_data_s",
                "AVPacket_side_data_elems",
                "AVPacket_side_data_elems_s",
                "AVPacket_size",
                "AVPacket_size_s",
                "AVPacket_stream_index",
                "AVPacket_stream_index_s",
                "AVPacket_time_base_num",
                "AVPacket_time_base_num_s",
                "AVPacket_time_base_den",
                "AVPacket_time_base_den_s",
                "AVPacket_time_base_s",
                "AVFormatContext_duration",
                "AVFormatContext_duration_s",
                "AVFormatContext_durationhi",
                "AVFormatContext_durationhi_s",
                "AVFormatContext_flags",
                "AVFormatContext_flags_s",
                "AVFormatContext_nb_streams",
                "AVFormatContext_nb_streams_s",
                "AVFormatContext_oformat",
                "AVFormatContext_oformat_s",
                "AVFormatContext_pb",
                "AVFormatContext_pb_s",
                "AVFormatContext_start_time",
                "AVFormatContext_start_time_s",
                "AVFormatContext_start_timehi",
                "AVFormatContext_start_timehi_s",
                "AVFormatContext_streams_a",
                "AVFormatContext_streams_a_s",
                "AVStream_codecpar",
                "AVStream_codecpar_s",
                "AVStream_discard",
                "AVStream_discard_s",
                "AVStream_duration",
                "AVStream_duration_s",
                "AVStream_durationhi",
                "AVStream_durationhi_s",
                "AVStream_time_base_num",
                "AVStream_time_base_num_s",
                "AVStream_time_base_den",
                "AVStream_time_base_den_s",
                "AVStream_time_base_s",
                "AVFilterInOut_filter_ctx",
                "AVFilterInOut_filter_ctx_s",
                "AVFilterInOut_name",
                "AVFilterInOut_name_s",
                "AVFilterInOut_next",
                "AVFilterInOut_next_s",
                "AVFilterInOut_pad_idx",
                "AVFilterInOut_pad_idx_s",
                "ff_init_encoder",
                "ff_init_decoder",
                "ff_free_encoder",
                "ff_free_decoder",
                "ff_encode_multi",
                "ff_decode_multi",
                "ff_set_packet",
                "ff_init_muxer",
                "ff_free_muxer",
                "ff_init_demuxer_file",
                "ff_write_multi",
                "ff_read_frame_multi",
                "ff_read_multi",
                "ff_init_filter_graph",
                "ff_filter_multi",
                "ff_decode_filter_multi",
                "ff_copyout_frame",
                "ff_copyout_frame_video",
                "ff_frame_video_packed_size",
                "ff_copyout_frame_video_packed",
                "ff_copyout_frame_video_imagedata",
                "ff_copyout_frame_ptr",
                "ff_copyin_frame",
                "ff_copyout_packet",
                "ff_copyout_packet_ptr",
                "ff_copyin_packet",
                "ff_copyout_codecpar",
                "ff_copyin_codecpar",
                "ff_malloc_int32_list",
                "ff_malloc_int64_list",
                "ffmpeg",
                "ffprobe",
                "av_frame_free_js",
                "av_packet_free_js",
                "avformat_close_input_js",
                "avcodec_free_context_js",
                "avcodec_parameters_free_js",
                "avfilter_graph_free_js",
                "avfilter_inout_free_js",
                "av_dict_free_js",
              ],
              E = [
                "readFile",
                "writeFile",
                "unlink",
                "unmount",
                "mkdev",
                "createLazyFile",
                "mkreaderdev",
                "mkblockreaderdev",
                "mkreadaheadfile",
                "unlinkreadaheadfile",
                "mkwriterdev",
                "mkstreamwriterdev",
                "mountwriterfs",
                "mkfsfhfile",
                "unlinkfsfhfile",
                "mkworkerfsfile",
                "unlinkworkerfsfile",
                "ff_reader_dev_send",
                "ff_block_reader_dev_send",
                "ff_reader_dev_waiting",
                "copyin_u8",
                "copyout_u8",
                "copyin_s16",
                "copyout_s16",
                "copyin_s32",
                "copyout_s32",
                "copyin_f32",
                "copyout_f32",
              ];
            return (
              (c.libavjsMode = y),
              y === "worker" ? (A(w), A(E)) : y === "threads" ? (A(w), s(E)) : (s(w), s(E)),
              Object.assign(c, i),
              c
            );
          })
      );
    }));
})();
var {
    base: $r,
    isWebAssemblySupported: Hr,
    isThreadingSupported: Wr,
    target: zr,
    VER: Kr,
    CONFIG: qr,
    DBG: jr,
    factories: Jr,
    i64tof64: Qr,
    f64toi64: Zr,
    i64ToBigInt: ea,
    bigIntToi64: ta,
    ff_channel_layout: ra,
    ff_channels: aa,
    AV_TIME_BASE: ia,
    AV_OPT_SEARCH_CHILDREN: na,
    AVMEDIA_TYPE_UNKNOWN: oa,
    AVMEDIA_TYPE_VIDEO: sa,
    AVMEDIA_TYPE_AUDIO: _a,
    AVMEDIA_TYPE_DATA: la,
    AVMEDIA_TYPE_SUBTITLE: ua,
    AVMEDIA_TYPE_ATTACHMENT: da,
    AV_SAMPLE_FMT_NONE: ca,
    AV_SAMPLE_FMT_U8: fa,
    AV_SAMPLE_FMT_S16: ma,
    AV_SAMPLE_FMT_S32: pa,
    AV_SAMPLE_FMT_FLT: Aa,
    AV_SAMPLE_FMT_DBL: ha,
    AV_SAMPLE_FMT_U8P: ga,
    AV_SAMPLE_FMT_S16P: ya,
    AV_SAMPLE_FMT_S32P: Ea,
    AV_SAMPLE_FMT_FLTP: wa,
    AV_SAMPLE_FMT_DBLP: ba,
    AV_SAMPLE_FMT_S64: va,
    AV_SAMPLE_FMT_S64P: Ta,
    AV_SAMPLE_FMT_NB: Sa,
    AV_PIX_FMT_NONE: Va,
    AV_PIX_FMT_YUV420P: Da,
    AV_PIX_FMT_YUYV422: Pa,
    AV_PIX_FMT_RGB24: Ia,
    AV_PIX_FMT_BGR24: Ra,
    AV_PIX_FMT_YUV422P: xa,
    AV_PIX_FMT_YUV444P: Ma,
    AV_PIX_FMT_YUV410P: Fa,
    AV_PIX_FMT_YUV411P: Oa,
    AV_PIX_FMT_GRAY8: ka,
    AV_PIX_FMT_MONOWHITE: Ca,
    AV_PIX_FMT_MONOBLACK: Na,
    AV_PIX_FMT_PAL8: La,
    AV_PIX_FMT_YUVJ420P: Ua,
    AV_PIX_FMT_YUVJ422P: Xa,
    AV_PIX_FMT_YUVJ444P: Ba,
    AV_PIX_FMT_UYVY422: Ga,
    AV_PIX_FMT_UYYVYY411: Ya,
    AV_PIX_FMT_BGR8: $a,
    AV_PIX_FMT_BGR4: Ha,
    AV_PIX_FMT_BGR4_BYTE: Wa,
    AV_PIX_FMT_RGB8: za,
    AV_PIX_FMT_RGB4: Ka,
    AV_PIX_FMT_RGB4_BYTE: qa,
    AV_PIX_FMT_NV12: ja,
    AV_PIX_FMT_NV21: Ja,
    AV_PIX_FMT_ARGB: Qa,
    AV_PIX_FMT_RGBA: Za,
    AV_PIX_FMT_ABGR: ei,
    AV_PIX_FMT_BGRA: ti,
    AV_PIX_FMT_GRAY16BE: ri,
    AV_PIX_FMT_GRAY16LE: ai,
    AV_PIX_FMT_YUV440P: ii,
    AV_PIX_FMT_YUVJ440P: ni,
    AV_PIX_FMT_YUVA420P: oi,
    AV_PIX_FMT_RGB48BE: si,
    AV_PIX_FMT_RGB48LE: _i,
    AV_PIX_FMT_RGB565BE: li,
    AV_PIX_FMT_RGB565LE: ui,
    AV_PIX_FMT_RGB555BE: di,
    AV_PIX_FMT_RGB555LE: ci,
    AV_PIX_FMT_BGR565BE: fi,
    AV_PIX_FMT_BGR565LE: mi,
    AV_PIX_FMT_BGR555BE: pi,
    AV_PIX_FMT_BGR555LE: Ai,
    AVIO_FLAG_READ: hi,
    AVIO_FLAG_WRITE: gi,
    AVIO_FLAG_READ_WRITE: yi,
    AVIO_FLAG_NONBLOCK: Ei,
    AVIO_FLAG_DIRECT: wi,
    AVFMT_FLAG_NOBUFFER: bi,
    AVFMT_FLAG_FLUSH_PACKETS: vi,
    AVSEEK_FLAG_BACKWARD: Ti,
    AVSEEK_FLAG_BYTE: Si,
    AVSEEK_FLAG_ANY: Vi,
    AVSEEK_FLAG_FRAME: Di,
    AVDISCARD_NONE: Pi,
    AVDISCARD_DEFAULT: Ii,
    AVDISCARD_NONREF: Ri,
    AVDISCARD_BIDIR: xi,
    AVDISCARD_NONINTRA: Mi,
    AVDISCARD_NONKEY: Fi,
    AVDISCARD_ALL: Oi,
    AV_LOG_QUIET: ki,
    AV_LOG_PANIC: Ci,
    AV_LOG_FATAL: Ni,
    AV_LOG_ERROR: Li,
    AV_LOG_WARNING: Ui,
    AV_LOG_INFO: Xi,
    AV_LOG_VERBOSE: Bi,
    AV_LOG_DEBUG: Gi,
    AV_LOG_TRACE: Yi,
    AV_PKT_FLAG_KEY: $i,
    AV_PKT_FLAG_CORRUPT: Hi,
    AV_PKT_FLAG_DISCARD: Wi,
    AV_PKT_FLAG_TRUSTED: zi,
    AV_PKT_FLAG_DISPOSABLE: Ki,
    E2BIG: qi,
    EPERM: ji,
    EADDRINUSE: Ji,
    EADDRNOTAVAIL: Qi,
    EAFNOSUPPORT: Zi,
    EAGAIN: en,
    EALREADY: tn,
    EBADF: rn,
    EBADMSG: an,
    EBUSY: nn,
    ECANCELED: on,
    ECHILD: sn,
    ECONNABORTED: _n,
    ECONNREFUSED: ln,
    ECONNRESET: un,
    EDEADLOCK: dn,
    EDESTADDRREQ: cn,
    EDOM: fn,
    EDQUOT: mn,
    EEXIST: pn,
    EFAULT: An,
    EFBIG: hn,
    EHOSTUNREACH: gn,
    EIDRM: yn,
    EILSEQ: En,
    EINPROGRESS: wn,
    EINTR: bn,
    EINVAL: vn,
    EIO: Tn,
    EISCONN: Sn,
    EISDIR: Vn,
    ELOOP: Dn,
    EMFILE: Pn,
    EMLINK: In,
    EMSGSIZE: Rn,
    EMULTIHOP: xn,
    ENAMETOOLONG: Mn,
    ENETDOWN: Fn,
    ENETRESET: On,
    ENETUNREACH: kn,
    ENFILE: Cn,
    ENOBUFS: Nn,
    ENODEV: Ln,
    ENOENT: Un,
    AVERROR_EOF: Xn,
    LibAV: at,
  } = D,
  se = D;
function M(e) {
  throw e;
}
function it(e) {
  if (e instanceof Object) {
    let t = e.toString();
    if ("errno" in e) {
      t = `(de)muxer error. ${e.errno}`;
      for (let [r, a] of Object.entries(at))
        typeof a == "number" && r.startsWith("E") && a == e.errno && (t = `(de)muxer error. ${r}`);
    }
    return t;
  }
  return e.toString();
}
async function me(e, t) {
  if (t < 0) {
    let r = await e.strerror(t);
    M(r);
  }
}
async function pe(e, t) {
  if (t != 0) {
    let r = await e.strerror(t);
    M(r);
  }
}
function j(e) {
  var t = String(e);
  if (t === "[object Object]")
    try {
      t = JSON.stringify(e);
    } catch {}
  return t;
}
var nr = (function () {
    function e() {}
    return (
      (e.prototype.isSome = function () {
        return !1;
      }),
      (e.prototype.isNone = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error("".concat(t));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, r) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return t();
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t();
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.toResult = function (t) {
        return v(t);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ae(F);
      }),
      e
    );
  })(),
  F = new nr();
Object.freeze(F);
var or = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (t) {
        return k(t(this.value));
      }),
      (e.prototype.mapOr = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.toResult = function (t) {
        return S(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ae(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(j(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  k = or,
  Oe;
(function (e) {
  function t() {
    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
    for (var n = [], l = 0, d = i; l < d.length; l++) {
      var _ = d[l];
      if (_.isSome()) n.push(_.value);
      else return _;
    }
    return k(n);
  }
  e.all = t;
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
    for (var n = 0, l = i; n < l.length; n++) {
      var d = l[n];
      if (d.isSome()) return d;
    }
    return F;
  }
  e.any = r;
  function a(i) {
    return i instanceof k || i === F;
  }
  e.isOption = a;
})(Oe || (Oe = {}));
var _e = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var a = 0, i = t.length, o; a < i; a++)
        (o || !(a in t)) && (o || (o = Array.prototype.slice.call(t, 0, a)), (o[a] = t[a]));
    return e.concat(o || Array.prototype.slice.call(t));
  },
  sr = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.error = t;
      var r = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (r && r.length > 0 && r[0].includes("ErrImpl") && r.shift(),
        (this._stack = r.join(`
`)));
    }
    return (
      (e.prototype.isOk = function () {
        return !1;
      }),
      (e.prototype.isErr = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.else = function (t) {
        return t;
      }),
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error(
          ""
            .concat(t, " - Error: ")
            .concat(
              j(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (t) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              j(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.unwrapErr = function () {
        return this.error;
      }),
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.mapErr = function (t) {
        return new v(t(this.error));
      }),
      (e.prototype.mapOr = function (t, r) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return t(this.error);
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t(this.error);
      }),
      (e.prototype.toOption = function () {
        return F;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(j(this.error), ")");
      }),
      Object.defineProperty(e.prototype, "stack", {
        get: function () {
          return ""
            .concat(
              this,
              `
`,
            )
            .concat(this._stack);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.toAsyncResult = function () {
        return new he(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var v = sr,
  _r = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (t) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.expectErr = function (t) {
        throw new Error(t);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(j(this.value)), { cause: this.value });
      }),
      (e.prototype.map = function (t) {
        return new S(t(this.value));
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.mapErr = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (t, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return k(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(j(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new he(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var S = _r,
  ke;
(function (e) {
  function t(l) {
    for (var d = [], _ = 1; _ < arguments.length; _++) d[_ - 1] = arguments[_];
    for (
      var u = l === void 0 ? [] : Array.isArray(l) ? l : _e([l], d, !0), p = [], c = 0, y = u;
      c < y.length;
      c++
    ) {
      var A = y[c];
      if (A.isOk()) p.push(A.value);
      else return A;
    }
    return new S(p);
  }
  e.all = t;
  function r(l) {
    for (var d = [], _ = 1; _ < arguments.length; _++) d[_ - 1] = arguments[_];
    for (
      var u = l === void 0 ? [] : Array.isArray(l) ? l : _e([l], d, !0), p = [], c = 0, y = u;
      c < y.length;
      c++
    ) {
      var A = y[c];
      if (A.isOk()) return A;
      p.push(A.error);
    }
    return new v(p);
  }
  e.any = r;
  function a(l) {
    try {
      return new S(l());
    } catch (d) {
      return new v(d);
    }
  }
  e.wrap = a;
  function i(l) {
    try {
      return l()
        .then(function (d) {
          return new S(d);
        })
        .catch(function (d) {
          return new v(d);
        });
    } catch (d) {
      return Promise.resolve(new v(d));
    }
  }
  e.wrapAsync = i;
  function o(l) {
    return l.reduce(
      function (d, _) {
        var u = d[0],
          p = d[1];
        return _.isOk()
          ? [_e(_e([], u, !0), [_.value], !1), p]
          : [u, _e(_e([], p, !0), [_.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = o;
  function n(l) {
    return l instanceof v || l instanceof S;
  }
  e.isResult = n;
})(ke || (ke = {}));
var we = function (e, t, r, a) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (n) {
            n(o);
          });
    }
    return new (r || (r = Promise))(function (o, n) {
      function l(u) {
        try {
          _(a.next(u));
        } catch (p) {
          n(p);
        }
      }
      function d(u) {
        try {
          _(a.throw(u));
        } catch (p) {
          n(p);
        }
      }
      function _(u) {
        u.done ? o(u.value) : i(u.value).then(l, d);
      }
      _((a = a.apply(e, t || [])).next());
    });
  },
  be = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      a,
      i,
      o,
      n;
    return (
      (n = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
      n
    );
    function l(_) {
      return function (u) {
        return d([_, u]);
      };
    }
    function d(_) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; n && ((n = 0), _[0] && (r = 0)), r; )
        try {
          if (
            ((a = 1),
            i &&
              (o =
                _[0] & 2
                  ? i.return
                  : _[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
              !(o = o.call(i, _[1])).done)
          )
            return o;
          switch (((i = 0), o && (_ = [_[0] & 2, o.value]), _[0])) {
            case 0:
            case 1:
              o = _;
              break;
            case 4:
              return (r.label++, { value: _[1], done: !1 });
            case 5:
              (r.label++, (i = _[1]), (_ = [0]));
              continue;
            case 7:
              ((_ = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (_[0] === 6 || _[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (_[0] === 3 && (!o || (_[1] > o[0] && _[1] < o[3]))) {
                r.label = _[1];
                break;
              }
              if (_[0] === 6 && r.label < o[1]) {
                ((r.label = o[1]), (o = _));
                break;
              }
              if (o && r.label < o[2]) {
                ((r.label = o[2]), r.ops.push(_));
                break;
              }
              (o[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          _ = t.call(e, r);
        } catch (u) {
          ((_ = [6, u]), (i = 0));
        } finally {
          a = o = 0;
        }
      if (_[0] & 5) throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  },
  he = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return we(r, void 0, void 0, function () {
            var i;
            return be(this, function (o) {
              return a.isErr() ? [2, a] : ((i = t(a.value)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return we(r, void 0, void 0, function () {
            var i;
            return be(this, function (o) {
              switch (o.label) {
                case 0:
                  return a.isErr() ? [2, a] : ((i = S), [4, t(a.value)]);
                case 1:
                  return [2, i.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return we(r, void 0, void 0, function () {
            var i;
            return be(this, function (o) {
              switch (o.label) {
                case 0:
                  return a.isOk() ? [2, a] : ((i = v), [4, t(a.error)]);
                case 1:
                  return [2, i.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return we(r, void 0, void 0, function () {
            var i;
            return be(this, function (o) {
              return a.isOk() ? [2, a] : ((i = t(a.error)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Ae(
          this.promise.then(function (t) {
            return t.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
var Ce = function (e, t, r, a) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (n) {
            n(o);
          });
    }
    return new (r || (r = Promise))(function (o, n) {
      function l(u) {
        try {
          _(a.next(u));
        } catch (p) {
          n(p);
        }
      }
      function d(u) {
        try {
          _(a.throw(u));
        } catch (p) {
          n(p);
        }
      }
      function _(u) {
        u.done ? o(u.value) : i(u.value).then(l, d);
      }
      _((a = a.apply(e, t || [])).next());
    });
  },
  Ne = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      a,
      i,
      o,
      n;
    return (
      (n = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
      n
    );
    function l(_) {
      return function (u) {
        return d([_, u]);
      };
    }
    function d(_) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; n && ((n = 0), _[0] && (r = 0)), r; )
        try {
          if (
            ((a = 1),
            i &&
              (o =
                _[0] & 2
                  ? i.return
                  : _[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
              !(o = o.call(i, _[1])).done)
          )
            return o;
          switch (((i = 0), o && (_ = [_[0] & 2, o.value]), _[0])) {
            case 0:
            case 1:
              o = _;
              break;
            case 4:
              return (r.label++, { value: _[1], done: !1 });
            case 5:
              (r.label++, (i = _[1]), (_ = [0]));
              continue;
            case 7:
              ((_ = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (_[0] === 6 || _[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (_[0] === 3 && (!o || (_[1] > o[0] && _[1] < o[3]))) {
                r.label = _[1];
                break;
              }
              if (_[0] === 6 && r.label < o[1]) {
                ((r.label = o[1]), (o = _));
                break;
              }
              if (o && r.label < o[2]) {
                ((r.label = o[2]), r.ops.push(_));
                break;
              }
              (o[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          _ = t.call(e, r);
        } catch (u) {
          ((_ = [6, u]), (i = 0));
        } finally {
          a = o = 0;
        }
      if (_[0] & 5) throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  },
  Ae = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return Ce(r, void 0, void 0, function () {
            var i;
            return Ne(this, function (o) {
              return a.isNone() ? [2, a] : ((i = t(a.value)), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return Ce(r, void 0, void 0, function () {
            var i;
            return Ne(this, function (o) {
              switch (o.label) {
                case 0:
                  return a.isNone() ? [2, a] : ((i = k), [4, t(a.value)]);
                case 1:
                  return [2, i.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var r = this;
        return this.thenInternal(function (a) {
          return Ce(r, void 0, void 0, function () {
            var i;
            return Ne(this, function (o) {
              return a.isSome() ? [2, a] : ((i = t()), [2, i instanceof e ? i.promise : i]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (t) {
        return new he(
          this.promise.then(function (r) {
            return r.toResult(t);
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
function H(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let t = {};
    for (let [r, a] of Object.entries(e.__serde_val)) {
      let i = a;
      t[r] = H(i);
    }
    return t;
  } else {
    if (e.__serde_tag == "map") return new Map(e.__serde_val.map(([t, r]) => [H(t), H(r)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(H));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(H);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex") return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return k(H(e.__serde_val));
    if (e.__serde_tag == "none") return F;
    if (e.__serde_tag == "ok") return S(H(e.__serde_val));
    if (e.__serde_tag == "err") return v(H(e.__serde_val));
    throw new Error("Unreachable");
  }
}
async function nt(e, t) {
  let r;
  return (
    await new Promise((a) => {
      let i = () => {
        (clearTimeout(r), t.removeEventListener("abort", i), a());
      };
      if ((t.addEventListener("abort", i), t.aborted)) {
        a();
        return;
      }
      r = setTimeout(() => {
        (t.removeEventListener("abort", i), a());
      }, e);
    }),
    t.aborted ? { aborted: !0, timeout_id: r } : { timed_out: !0, timeout_id: r }
  );
}
async function lr(e, t, r, a, i, o, n) {
  let l = o ? "reload" : "default",
    d;
  for (let _ = 0; _ < r; ++_) {
    let u = new AbortController(),
      p = AbortSignal.any([u.signal, n]),
      c = setTimeout(() => u.abort(`Timed out after ${a}`), a);
    try {
      let s = await fetch(e, { headers: t, cache: l, signal: p });
      if (s.ok) return s;
      if (s.status == 404 || s.status == 416) return { err_status: s.status };
      d = { err_status: s.status };
    } catch (s) {
      if (s instanceof DOMException && s.name == "AbortError")
        return n.aborted ? { aborted: !0 } : { timeout: !0 };
      d = s;
    } finally {
      clearTimeout(c);
    }
    let y = Math.pow(2, _) * i;
    _ + 1 < r;
    let A = await nt(y, n);
    if ((A.timeout_id && clearTimeout(c), A.aborted)) return { aborted: !0 };
  }
  return d;
}
function ur(e) {
  let t = [137, 80, 78, 71, 13, 10, 26, 10],
    r = [73, 69, 78, 68, 174, 66, 96, 130];
  for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return -1;
  let a = r.length,
    i = e.length;
  if (a === 0 || a > i) return -1;
  let o = r[0];
  for (let n = t.length; n <= i - a; n++) {
    if (e[n] !== o) continue;
    let l = !0;
    for (let d = 1; d < a; d++)
      if (e[n + d] !== r[d]) {
        l = !1;
        break;
      }
    if (l) return n + r.length;
  }
  return -1;
}
function ot() {
  ((globalThis.FetchWithRetry = lr),
    (globalThis.DoAbortableSleep = nt),
    (globalThis.FindPngSliceIndex = ur),
    (globalThis.MutateUrl = (e) => e),
    (globalThis.MAX_FETCH_ATTEMPTS = 6),
    (globalThis.MAX_READ_ATTEMPTS = 6));
}
var Le = {
  FromInjectedToService: 0,
  FromContentToService: 1,
  FromServiceToWorker: 2,
  FromWorkerToService: 3,
  FromUntrustedInjectedToTrusted: 4,
  FromTrustedInjectedToUntrusted: 5,
  FromServiceToContent: 6,
  FromServiceToInjected: 7,
  FromServiceToService: 8,
};
var Ue = new BroadcastChannel("worker_service");
function z(e) {
  let t = Le.FromWorkerToService;
  Ue.postMessage({ msg: e, channel: t });
}
function st(e) {
  let t = (r) => {
    let a = r.data.msg;
    r.data.channel == Le.FromServiceToWorker && e(a);
  };
  return (
    Ue.addEventListener("message", t),
    () => {
      Ue.removeEventListener("message", t);
    }
  );
}
var Y = class {
    constructor(t) {
      ((this.download_id = t), (this.progress = { status: "queuing" }), this.postNow());
    }
    schedulePost() {
      this.timeout || (this.timeout = setTimeout(() => this.postNow(), 500));
    }
    postNow() {
      (this.timeout && (clearTimeout(this.timeout), delete this.timeout),
        z({
          name: "download_progress",
          data: { download_id: this.download_id, progress: this.progress },
        }));
    }
    set_progress(t) {
      ((this.progress = t), this.schedulePost());
    }
    set_duration_in_s(t) {
      this.progress.status == "downloading" && (this.progress.output_duration_s = t);
    }
    add_bytes(t) {
      (this.progress.status == "downloading"
        ? (this.progress.fetched_bytes_count += t)
        : this.progress.status == "queuing" &&
          (this.progress = {
            status: "downloading",
            percent: { is_known: !0, value: 0 },
            fetched_bytes_count: t,
            output_duration_s: 0,
          }),
        this.schedulePost());
    }
    dont_trust_percent() {
      this.progress.status == "downloading" &&
        ((this.progress.percent.is_known = !1), this.schedulePost());
    }
    set_percent(t) {
      (this.progress.status == "downloading" && this.progress.percent.is_known
        ? (this.progress.percent.value = t)
        : this.progress.status == "queuing" &&
          (this.progress = {
            status: "downloading",
            percent: { is_known: !0, value: t },
            fetched_bytes_count: 0,
            output_duration_s: 0,
          }),
        this.schedulePost());
    }
  },
  ve = class extends Y {
    constructor(t) {
      super(t);
    }
    nextStream() {
      ((this.second_stream = !0), (this.progress = { status: "queuing" }), this.postNow());
    }
    postNow() {
      if (
        (this.timeout && (clearTimeout(this.timeout), delete this.timeout),
        !(!this.second_stream && this.progress.status == "finalizing"))
      ) {
        if (!(this.second_stream && this.progress.status == "queuing")) {
          let t = structuredClone(this.progress);
          (t.status == "downloading" &&
            t.percent.is_known &&
            (this.second_stream
              ? ((t.percent.value *= 0.5), (t.percent.value += 50))
              : (t.percent.value *= 0.5)),
            z({ name: "download_progress", data: { download_id: this.download_id, progress: t } }));
        }
      }
    }
  };
var X = class {
  constructor() {
    this.filename_writable_map = new Map();
  }
  async open(t) {
    let a = await (await navigator.storage.getDirectory()).getFileHandle(t, { create: !0 }),
      i = await a.createSyncAccessHandle();
    this.filename_writable_map.set(t, { writable: i, handle: a, size: 0 });
  }
  async onwrite(t, r, a) {
    let i = this.filename_writable_map.get(t);
    i && (await i.writable.write(a, { at: r }), (i.size += a.length));
  }
  async close(t) {
    let r = this.filename_writable_map.get(t);
    if (!r) return 0;
    await r.writable.close();
    let a = this.filename_writable_map.get(t)?.size;
    return (this.filename_writable_map.delete(t), a || 0);
  }
  async remove(t) {
    await (await navigator.storage.getDirectory()).removeEntry(t);
  }
};
async function C(e, t) {
  let i = await (await (await navigator.storage.getDirectory()).getFileHandle(t)).getFile();
  switch (e.extension) {
    case "mkv":
      return URL.createObjectURL(new File([i], t, { type: "video/x-matroska" }));
    case "flv":
      return URL.createObjectURL(new File([i], t, { type: "video/x-flv" }));
    default:
      return URL.createObjectURL(i);
  }
}
function re() {
  return { user_abort: !0, e4XX_5XX_failure: !1, other_failure: !1, percentage_incomplete: !1 };
}
function Xe() {
  return { user_abort: !1, e4XX_5XX_failure: !1, other_failure: !1, percentage_incomplete: !0 };
}
function P(e) {
  return {
    user_abort: !1,
    e4XX_5XX_failure: !1,
    percentage_incomplete: !1,
    other_failure: !0,
    message: e,
  };
}
function Te(e) {
  return {
    user_abort: !1,
    e4XX_5XX_failure: !0,
    percentage_incomplete: !1,
    other_failure: !1,
    status: e,
  };
}
var _t, lt, ut;
function dt(e) {
  return e == 255 || e == -1415072069;
}
function Be(e) {
  return e < 1e3
    ? Te(e)
    : e == 1001
      ? P("Network error")
      : e == 1002
        ? P("Read() error")
        : P("Fetch timeout");
}
function Ge(e) {
  return e ? (e > 0 && e < 1e3) || e == 1001 || e == 1002 : !1;
}
async function L(e, t, r, a) {
  let i = await se.LibAV({ noworker: !0 }),
    o = new X();
  ((i.onwrite = o.onwrite.bind(o)),
    _t &&
      lt &&
      ut &&
      (await i.jsfetch_set_read_timeout(_t),
      await i.jsfetch_set_fetch_timeout(lt),
      await i.jsfetch_set_initial_retry_delay(ut)),
    await i.jsfetch_set_bypass_cache(e.cache == "reload"));
  let n = !1;
  t.addEventListener("abort", async (E) => {
    p && (await i.ffmpeg_interrupt(), (p = !1), (n = !0));
  });
  let l = new Y(e.download_id),
    d = 0,
    _ = () => {
      setTimeout(async () => {
        let E = await i.ffmpeg_get_total_size_bytes(),
          m = E - d;
        ((d = E), l.add_bytes(m));
        let f = await i.ffmpeg_get_out_time_ms();
        if ((l.set_duration_in_s(f / 1e3), e.strategy == "http_strip_audio_jsfetch"))
          l.dont_trust_percent();
        else if ("duration" in e && typeof e.duration == "number") {
          let h = e.duration * 1e3,
            R = 100 * (f / h);
          l.set_percent(R);
        } else if ("size" in e && e.size.isSome()) {
          let h = e.size.value,
            R = 100 * (E / h);
          l.set_percent(R);
        } else l.dont_trust_percent();
        p && _();
      }, 500);
    },
    u,
    p = !1,
    c = 0,
    y;
  await o.open(r);
  try {
    (await i.mkwriterdev(r), (p = !0), _(), (u = await i.ffmpeg(a)));
  } catch (E) {
    y = `${E}`;
  } finally {
    ((c = await o.close(r)), (p = !1));
  }
  let A = c < 1e3,
    s = !1,
    w = 0;
  if ("duration" in e && typeof e.duration == "number") {
    let E = e.duration * 1e3;
    ((w = 100 * ((await i.ffmpeg_get_out_time_ms()) / E)), (s = w < 95));
  } else if ("size" in e && e.size.isSome()) {
    let E = await i.ffmpeg_get_total_size_bytes(),
      m = e.size.value;
    ((w = 100 * (E / m)), (s = w < 90));
  }
  if (y)
    return w <= 5
      ? (await o.remove(r),
        {
          aborted_no_partial: !0,
          download_id: e.download_id,
          ending_reason: P(`Unknown libav error: ${y}`),
        })
      : {
          internal_filename: r,
          aborted_no_partial: !1,
          internal_bloburl: await C(e, r),
          download_id: e.download_id,
          ending_reason: Xe(),
        };
  if (A) {
    if ((await o.remove(r), dt(u) || n))
      return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: re() };
    if (u != 0 && u != null) {
      if (Ge(u))
        return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: Be(u) };
      let E = await i.strerror(u);
      return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: P(E) };
    } else
      return {
        aborted_no_partial: !0,
        download_id: e.download_id,
        ending_reason: P(`Expected larger size, but only got ${c} bytes`),
      };
  }
  if (dt(u) || n)
    return {
      internal_filename: r,
      aborted_no_partial: !1,
      internal_bloburl: await C(e, r),
      download_id: e.download_id,
      ending_reason: re(),
    };
  if (s && w >= 5) {
    let E = Ge(u) ? Be(u) : Xe();
    return {
      internal_filename: r,
      aborted_no_partial: !1,
      internal_bloburl: await C(e, r),
      download_id: e.download_id,
      ending_reason: E,
    };
  }
  if (u == 0)
    return {
      internal_filename: r,
      aborted_no_partial: !1,
      internal_bloburl: await C(e, r),
      download_id: e.download_id,
      ending_reason: "end_of_file",
    };
  if (u && Ge(u))
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: Be(u) };
  if (u) {
    await o.remove(r);
    let E = await i.strerror(u);
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: P(E) };
  }
  return (
    await o.remove(r),
    { aborted_no_partial: !0, download_id: e.download_id, ending_reason: P("Unreachable") }
  );
}
async function ct(e, t) {
  let r = `${e.download_id}.${e.extension}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-f",
    "dash",
    "-i",
    `jsfetch:${e.url}`,
    "-map",
    `0:${e.entry}`,
    "-map",
    "0:a:0?",
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function ft(e, t) {
  let r = `${e.download_id}.${e.extension}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-f",
    "dash",
    "-i",
    `jsfetch:${e.url}`,
    "-map",
    "0:a:0",
    "-c:a",
    "libmp3lame",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function mt(e, t) {
  let r = `${e.download_id}.${e.extension}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "1M",
    "-f",
    "dash",
    "-i",
    `jsfetch:${e.url}`,
    "-map",
    `0:${e.entry}`,
    "-t",
    "3",
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
var Se = (function () {
  function e() {
    this.listeners = {};
  }
  var t = e.prototype;
  return (
    (t.on = function (a, i) {
      (this.listeners[a] || (this.listeners[a] = []), this.listeners[a].push(i));
    }),
    (t.off = function (a, i) {
      if (!this.listeners[a]) return !1;
      var o = this.listeners[a].indexOf(i);
      return (
        (this.listeners[a] = this.listeners[a].slice(0)),
        this.listeners[a].splice(o, 1),
        o > -1
      );
    }),
    (t.trigger = function (a) {
      var i = this.listeners[a];
      if (i)
        if (arguments.length === 2)
          for (var o = i.length, n = 0; n < o; ++n) i[n].call(this, arguments[1]);
        else
          for (var l = Array.prototype.slice.call(arguments, 1), d = i.length, _ = 0; _ < d; ++_)
            i[_].apply(this, l);
    }),
    (t.dispose = function () {
      this.listeners = {};
    }),
    (t.pipe = function (a) {
      this.on("data", function (i) {
        a.push(i);
      });
    }),
    e
  );
})();
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    ae.apply(null, arguments)
  );
}
var Ye = ir(At()),
  mr = function (t) {
    return Ye.default.atob ? Ye.default.atob(t) : Buffer.from(t, "base64").toString("binary");
  };
function $e(e) {
  for (var t = mr(e), r = new Uint8Array(t.length), a = 0; a < t.length; a++)
    r[a] = t.charCodeAt(a);
  return r;
}
var ze = class extends Se {
    constructor() {
      (super(), (this.buffer = ""));
    }
    push(t) {
      let r;
      for (
        this.buffer += t,
          r = this.buffer.indexOf(`
`);
        r > -1;
        r = this.buffer.indexOf(`
`)
      )
        (this.trigger("data", this.buffer.substring(0, r)),
          (this.buffer = this.buffer.substring(r + 1)));
    }
  },
  pr = "	",
  He = function (e) {
    let t = /([0-9.]*)?@?([0-9.]*)?/.exec(e || ""),
      r = {};
    return (t[1] && (r.length = parseInt(t[1], 10)), t[2] && (r.offset = parseInt(t[2], 10)), r);
  },
  Ar = function () {
    let r = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + r + ")");
  },
  O = function (e) {
    let t = {};
    if (!e) return t;
    let r = e.split(Ar()),
      a = r.length,
      i;
    for (; a--; )
      r[a] !== "" &&
        ((i = /([^=]*)=(.*)/.exec(r[a]).slice(1)),
        (i[0] = i[0].replace(/^\s+|\s+$/g, "")),
        (i[1] = i[1].replace(/^\s+|\s+$/g, "")),
        (i[1] = i[1].replace(/^['"](.*)['"]$/g, "$1")),
        (t[i[0]] = i[1]));
    return t;
  },
  ht = (e) => {
    let t = e.split("x"),
      r = {};
    return (t[0] && (r.width = parseInt(t[0], 10)), t[1] && (r.height = parseInt(t[1], 10)), r);
  },
  Ke = class extends Se {
    constructor() {
      (super(), (this.customParsers = []), (this.tagMappers = []));
    }
    push(t) {
      let r, a;
      if (((t = t.trim()), t.length === 0)) return;
      if (t[0] !== "#") {
        this.trigger("data", { type: "uri", uri: t });
        return;
      }
      this.tagMappers
        .reduce(
          (o, n) => {
            let l = n(t);
            return l === t ? o : o.concat([l]);
          },
          [t],
        )
        .forEach((o) => {
          for (let n = 0; n < this.customParsers.length; n++)
            if (this.customParsers[n].call(this, o)) return;
          if (o.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: o.slice(1) });
            return;
          }
          if (((o = o.replace("\r", "")), (r = /^#EXTM3U/.exec(o)), r)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((r = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "inf" }),
              r[1] && (a.duration = parseFloat(r[1])),
              r[2] && (a.title = r[2]),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "targetduration" }),
              r[1] && (a.duration = parseInt(r[1], 10)),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-VERSION:([0-9.]*)?/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "version" }),
              r[1] && (a.version = parseInt(r[1], 10)),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "media-sequence" }),
              r[1] && (a.number = parseInt(r[1], 10)),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "discontinuity-sequence" }),
              r[1] && (a.number = parseInt(r[1], 10)),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "playlist-type" }),
              r[1] && (a.playlistType = r[1]),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-BYTERANGE:(.*)?$/.exec(o)), r)) {
            ((a = ae(He(r[1]), { type: "tag", tagType: "byterange" })), this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "allow-cache" }),
              r[1] && (a.allowed = !/NO/.test(r[1])),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-MAP:(.*)$/.exec(o)), r)) {
            if (((a = { type: "tag", tagType: "map" }), r[1])) {
              let n = O(r[1]);
              (n.URI && (a.uri = n.URI), n.BYTERANGE && (a.byterange = He(n.BYTERANGE)));
            }
            this.trigger("data", a);
            return;
          }
          if (((r = /^#EXT-X-STREAM-INF:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "stream-inf" }),
              r[1] &&
                ((a.attributes = O(r[1])),
                a.attributes.RESOLUTION && (a.attributes.RESOLUTION = ht(a.attributes.RESOLUTION)),
                a.attributes.BANDWIDTH &&
                  (a.attributes.BANDWIDTH = parseInt(a.attributes.BANDWIDTH, 10)),
                a.attributes["FRAME-RATE"] &&
                  (a.attributes["FRAME-RATE"] = parseFloat(a.attributes["FRAME-RATE"])),
                a.attributes["PROGRAM-ID"] &&
                  (a.attributes["PROGRAM-ID"] = parseInt(a.attributes["PROGRAM-ID"], 10))),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-MEDIA:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "media" }),
              r[1] && (a.attributes = O(r[1])),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-ENDLIST/.exec(o)), r)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((r = /^#EXT-X-DISCONTINUITY/.exec(o)), r)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((r = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "program-date-time" }),
              r[1] && ((a.dateTimeString = r[1]), (a.dateTimeObject = new Date(r[1]))),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-KEY:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "key" }),
              r[1] &&
                ((a.attributes = O(r[1])),
                a.attributes.IV &&
                  (a.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                    (a.attributes.IV = a.attributes.IV.substring(2)),
                  (a.attributes.IV = a.attributes.IV.match(/.{8}/g)),
                  (a.attributes.IV[0] = parseInt(a.attributes.IV[0], 16)),
                  (a.attributes.IV[1] = parseInt(a.attributes.IV[1], 16)),
                  (a.attributes.IV[2] = parseInt(a.attributes.IV[2], 16)),
                  (a.attributes.IV[3] = parseInt(a.attributes.IV[3], 16)),
                  (a.attributes.IV = new Uint32Array(a.attributes.IV)))),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-START:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "start" }),
              r[1] &&
                ((a.attributes = O(r[1])),
                (a.attributes["TIME-OFFSET"] = parseFloat(a.attributes["TIME-OFFSET"])),
                (a.attributes.PRECISE = /YES/.test(a.attributes.PRECISE))),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "cue-out-cont" }),
              r[1] ? (a.data = r[1]) : (a.data = ""),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-CUE-OUT:(.*)?$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "cue-out" }),
              r[1] ? (a.data = r[1]) : (a.data = ""),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-CUE-IN:?(.*)?$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "cue-in" }),
              r[1] ? (a.data = r[1]) : (a.data = ""),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-SKIP:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "skip" }),
              (a.attributes = O(r[1])),
              a.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (a.attributes["SKIPPED-SEGMENTS"] = parseInt(a.attributes["SKIPPED-SEGMENTS"], 10)),
              a.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (a.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  a.attributes["RECENTLY-REMOVED-DATERANGES"].split(pr)),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-PART:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "part" }),
              (a.attributes = O(r[1])),
              ["DURATION"].forEach(function (n) {
                a.attributes.hasOwnProperty(n) && (a.attributes[n] = parseFloat(a.attributes[n]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (n) {
                a.attributes.hasOwnProperty(n) && (a.attributes[n] = /YES/.test(a.attributes[n]));
              }),
              a.attributes.hasOwnProperty("BYTERANGE") &&
                (a.attributes.byterange = He(a.attributes.BYTERANGE)),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "server-control" }),
              (a.attributes = O(r[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (n) {
                a.attributes.hasOwnProperty(n) && (a.attributes[n] = parseFloat(a.attributes[n]));
              }),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (n) {
                a.attributes.hasOwnProperty(n) && (a.attributes[n] = /YES/.test(a.attributes[n]));
              }),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-PART-INF:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "part-inf" }),
              (a.attributes = O(r[1])),
              ["PART-TARGET"].forEach(function (n) {
                a.attributes.hasOwnProperty(n) && (a.attributes[n] = parseFloat(a.attributes[n]));
              }),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "preload-hint" }),
              (a.attributes = O(r[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (n) {
                if (a.attributes.hasOwnProperty(n)) {
                  a.attributes[n] = parseInt(a.attributes[n], 10);
                  let l = n === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((a.attributes.byterange = a.attributes.byterange || {}),
                    (a.attributes.byterange[l] = a.attributes[n]),
                    delete a.attributes[n]);
                }
              }),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "rendition-report" }),
              (a.attributes = O(r[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (n) {
                a.attributes.hasOwnProperty(n) && (a.attributes[n] = parseInt(a.attributes[n], 10));
              }),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-DATERANGE:(.*)$/.exec(o)), r && r[1])) {
            ((a = { type: "tag", tagType: "daterange" }),
              (a.attributes = O(r[1])),
              ["ID", "CLASS"].forEach(function (l) {
                a.attributes.hasOwnProperty(l) && (a.attributes[l] = String(a.attributes[l]));
              }),
              ["START-DATE", "END-DATE"].forEach(function (l) {
                a.attributes.hasOwnProperty(l) && (a.attributes[l] = new Date(a.attributes[l]));
              }),
              ["DURATION", "PLANNED-DURATION"].forEach(function (l) {
                a.attributes.hasOwnProperty(l) && (a.attributes[l] = parseFloat(a.attributes[l]));
              }),
              ["END-ON-NEXT"].forEach(function (l) {
                a.attributes.hasOwnProperty(l) && (a.attributes[l] = /YES/i.test(a.attributes[l]));
              }),
              ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (l) {
                a.attributes.hasOwnProperty(l) && (a.attributes[l] = a.attributes[l].toString(16));
              }));
            let n = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let l in a.attributes) {
              if (!n.test(l)) continue;
              let d = /[0-9A-Fa-f]{6}/g.test(a.attributes[l]),
                _ = /^\d+(\.\d+)?$/.test(a.attributes[l]);
              a.attributes[l] = d
                ? a.attributes[l].toString(16)
                : _
                  ? parseFloat(a.attributes[l])
                  : String(a.attributes[l]);
            }
            this.trigger("data", a);
            return;
          }
          if (((r = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(o)), r)) {
            this.trigger("data", { type: "tag", tagType: "independent-segments" });
            return;
          }
          if (((r = /^#EXT-X-I-FRAMES-ONLY/.exec(o)), r)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((r = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "content-steering" }),
              (a.attributes = O(r[1])),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "i-frame-playlist" }),
              (a.attributes = O(r[1])),
              a.attributes.URI && (a.uri = a.attributes.URI),
              a.attributes.BANDWIDTH &&
                (a.attributes.BANDWIDTH = parseInt(a.attributes.BANDWIDTH, 10)),
              a.attributes.RESOLUTION && (a.attributes.RESOLUTION = ht(a.attributes.RESOLUTION)),
              a.attributes["AVERAGE-BANDWIDTH"] &&
                (a.attributes["AVERAGE-BANDWIDTH"] = parseInt(
                  a.attributes["AVERAGE-BANDWIDTH"],
                  10,
                )),
              a.attributes["FRAME-RATE"] &&
                (a.attributes["FRAME-RATE"] = parseFloat(a.attributes["FRAME-RATE"])),
              this.trigger("data", a));
            return;
          }
          if (((r = /^#EXT-X-DEFINE:(.*)$/.exec(o)), r)) {
            ((a = { type: "tag", tagType: "define" }),
              (a.attributes = O(r[1])),
              this.trigger("data", a));
            return;
          }
          this.trigger("data", { type: "tag", data: o.slice(4) });
        });
    }
    addParser({ expression: t, customType: r, dataParser: a, segment: i }) {
      (typeof a != "function" && (a = (o) => o),
        this.customParsers.push((o) => {
          if (t.exec(o))
            return (
              this.trigger("data", { type: "custom", data: a(o), customType: r, segment: i }),
              !0
            );
        }));
    }
    addTagMapper({ expression: t, map: r }) {
      let a = (i) => (t.test(i) ? r(i) : i);
      this.tagMappers.push(a);
    }
  },
  hr = (e) => e.toLowerCase().replace(/-(\w)/g, (t) => t[1].toUpperCase()),
  J = function (e) {
    let t = {};
    return (
      Object.keys(e).forEach(function (r) {
        t[hr(r)] = e[r];
      }),
      t
    );
  },
  We = function (e) {
    let { serverControl: t, targetDuration: r, partTargetDuration: a } = e;
    if (!t) return;
    let i = "#EXT-X-SERVER-CONTROL",
      o = "holdBack",
      n = "partHoldBack",
      l = r && r * 3,
      d = a && a * 2;
    (r &&
      !t.hasOwnProperty(o) &&
      ((t[o] = l),
      this.trigger("info", { message: `${i} defaulting HOLD-BACK to targetDuration * 3 (${l}).` })),
      l &&
        t[o] < l &&
        (this.trigger("warn", {
          message: `${i} clamping HOLD-BACK (${t[o]}) to targetDuration * 3 (${l})`,
        }),
        (t[o] = l)),
      a &&
        !t.hasOwnProperty(n) &&
        ((t[n] = a * 3),
        this.trigger("info", {
          message: `${i} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[n]}).`,
        })),
      a &&
        t[n] < d &&
        (this.trigger("warn", {
          message: `${i} clamping PART-HOLD-BACK (${t[n]}) to partTargetDuration * 2 (${d}).`,
        }),
        (t[n] = d)));
  },
  ye = class extends Se {
    constructor(t = {}) {
      (super(),
        (this.lineStream = new ze()),
        (this.parseStream = new Ke()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = t.mainDefinitions || {}),
        (this.params = new URL(t.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let r = this,
        a = [],
        i = {},
        o,
        n,
        l = !1,
        d = function () {},
        _ = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        u = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        p = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let c = 0,
        y = 0,
        A = {};
      (this.on("end", () => {
        i.uri ||
          (!i.parts && !i.preloadHints) ||
          (!i.map && o && (i.map = o),
          !i.key && n && (i.key = n),
          !i.timeline && typeof p == "number" && (i.timeline = p),
          (this.manifest.preloadSegment = i));
      }),
        this.parseStream.on("data", function (s) {
          let w, E;
          if (r.manifest.definitions) {
            for (let m in r.manifest.definitions)
              if (
                (s.uri && (s.uri = s.uri.replace(`{$${m}}`, r.manifest.definitions[m])),
                s.attributes)
              )
                for (let f in s.attributes)
                  typeof s.attributes[f] == "string" &&
                    (s.attributes[f] = s.attributes[f].replace(
                      `{$${m}}`,
                      r.manifest.definitions[m],
                    ));
          }
          ({
            tag() {
              (
                ({
                  version() {
                    s.version && (this.manifest.version = s.version);
                  },
                  "allow-cache"() {
                    ((this.manifest.allowCache = s.allowed),
                      "allowed" in s ||
                        (this.trigger("info", { message: "defaulting allowCache to YES" }),
                        (this.manifest.allowCache = !0)));
                  },
                  byterange() {
                    let m = {};
                    ("length" in s &&
                      ((i.byterange = m), (m.length = s.length), "offset" in s || (s.offset = c)),
                      "offset" in s && ((i.byterange = m), (m.offset = s.offset)),
                      (c = m.offset + m.length));
                  },
                  endlist() {
                    this.manifest.endList = !0;
                  },
                  inf() {
                    ("mediaSequence" in this.manifest ||
                      ((this.manifest.mediaSequence = 0),
                      this.trigger("info", { message: "defaulting media sequence to zero" })),
                      "discontinuitySequence" in this.manifest ||
                        ((this.manifest.discontinuitySequence = 0),
                        this.trigger("info", {
                          message: "defaulting discontinuity sequence to zero",
                        })),
                      s.title && (i.title = s.title),
                      s.duration > 0 && (i.duration = s.duration),
                      s.duration === 0 &&
                        ((i.duration = 0.01),
                        this.trigger("info", {
                          message: "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = a));
                  },
                  key() {
                    if (!s.attributes) {
                      this.trigger("warn", {
                        message: "ignoring key declaration without attribute list",
                      });
                      return;
                    }
                    if (s.attributes.METHOD === "NONE") {
                      n = null;
                      return;
                    }
                    if (!s.attributes.URI) {
                      this.trigger("warn", { message: "ignoring key declaration without URI" });
                      return;
                    }
                    if (s.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.apple.fps.1_0"] = {
                          attributes: s.attributes,
                        }));
                      return;
                    }
                    if (s.attributes.KEYFORMAT === "com.microsoft.playready") {
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.microsoft.playready"] = {
                          uri: s.attributes.URI,
                        }));
                      return;
                    }
                    if (s.attributes.KEYFORMAT === u) {
                      if (
                        ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(
                          s.attributes.METHOD,
                        ) === -1
                      ) {
                        this.trigger("warn", {
                          message: "invalid key method provided for Widevine",
                        });
                        return;
                      }
                      if (
                        (s.attributes.METHOD === "SAMPLE-AES-CENC" &&
                          this.trigger("warn", {
                            message:
                              "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                          }),
                        s.attributes.URI.substring(0, 23) !== "data:text/plain;base64,")
                      ) {
                        this.trigger("warn", { message: "invalid key URI provided for Widevine" });
                        return;
                      }
                      if (!(s.attributes.KEYID && s.attributes.KEYID.substring(0, 2) === "0x")) {
                        this.trigger("warn", { message: "invalid key ID provided for Widevine" });
                        return;
                      }
                      ((this.manifest.contentProtection = this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.widevine.alpha"] = {
                          attributes: {
                            schemeIdUri: s.attributes.KEYFORMAT,
                            keyId: s.attributes.KEYID.substring(2),
                          },
                          pssh: $e(s.attributes.URI.split(",")[1]),
                        }));
                      return;
                    }
                    (s.attributes.METHOD ||
                      this.trigger("warn", { message: "defaulting key method to AES-128" }),
                      (n = { method: s.attributes.METHOD || "AES-128", uri: s.attributes.URI }),
                      typeof s.attributes.IV < "u" && (n.iv = s.attributes.IV));
                  },
                  "media-sequence"() {
                    if (!isFinite(s.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid media sequence: " + s.number,
                      });
                      return;
                    }
                    this.manifest.mediaSequence = s.number;
                  },
                  "discontinuity-sequence"() {
                    if (!isFinite(s.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid discontinuity sequence: " + s.number,
                      });
                      return;
                    }
                    ((this.manifest.discontinuitySequence = s.number), (p = s.number));
                  },
                  "playlist-type"() {
                    if (!/VOD|EVENT/.test(s.playlistType)) {
                      this.trigger("warn", {
                        message: "ignoring unknown playlist type: " + s.playlist,
                      });
                      return;
                    }
                    this.manifest.playlistType = s.playlistType;
                  },
                  map() {
                    ((o = {}),
                      s.uri && (o.uri = s.uri),
                      s.byterange && (o.byterange = s.byterange),
                      n && (o.key = n));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = a),
                      (this.manifest.mediaGroups = this.manifest.mediaGroups || _),
                      !s.attributes)
                    ) {
                      this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
                      return;
                    }
                    (i.attributes || (i.attributes = {}), ae(i.attributes, s.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups = this.manifest.mediaGroups || _),
                      !(
                        s.attributes &&
                        s.attributes.TYPE &&
                        s.attributes["GROUP-ID"] &&
                        s.attributes.NAME
                      ))
                    ) {
                      this.trigger("warn", {
                        message: "ignoring incomplete or missing media group",
                      });
                      return;
                    }
                    let m = this.manifest.mediaGroups[s.attributes.TYPE];
                    ((m[s.attributes["GROUP-ID"]] = m[s.attributes["GROUP-ID"]] || {}),
                      (w = m[s.attributes["GROUP-ID"]]),
                      (E = { default: /yes/i.test(s.attributes.DEFAULT) }),
                      E.default
                        ? (E.autoselect = !0)
                        : (E.autoselect = /yes/i.test(s.attributes.AUTOSELECT)),
                      s.attributes.LANGUAGE && (E.language = s.attributes.LANGUAGE),
                      s.attributes.URI && (E.uri = s.attributes.URI),
                      s.attributes["INSTREAM-ID"] && (E.instreamId = s.attributes["INSTREAM-ID"]),
                      s.attributes.CHARACTERISTICS &&
                        (E.characteristics = s.attributes.CHARACTERISTICS),
                      s.attributes.FORCED && (E.forced = /yes/i.test(s.attributes.FORCED)),
                      (w[s.attributes.NAME] = E));
                  },
                  discontinuity() {
                    ((p += 1),
                      (i.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(a.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = s.dateTimeString),
                      (this.manifest.dateTimeObject = s.dateTimeObject)),
                      (i.dateTimeString = s.dateTimeString),
                      (i.dateTimeObject = s.dateTimeObject));
                    let { lastProgramDateTime: m } = this;
                    ((this.lastProgramDateTime = new Date(s.dateTimeString).getTime()),
                      m === null &&
                        this.manifest.segments.reduceRight(
                          (f, h) => ((h.programDateTime = f - h.duration * 1e3), h.programDateTime),
                          this.lastProgramDateTime,
                        ));
                  },
                  targetduration() {
                    if (!isFinite(s.duration) || s.duration < 0) {
                      this.trigger("warn", {
                        message: "ignoring invalid target duration: " + s.duration,
                      });
                      return;
                    }
                    ((this.manifest.targetDuration = s.duration), We.call(this, this.manifest));
                  },
                  start() {
                    if (!s.attributes || isNaN(s.attributes["TIME-OFFSET"])) {
                      this.trigger("warn", {
                        message: "ignoring start declaration without appropriate attribute list",
                      });
                      return;
                    }
                    this.manifest.start = {
                      timeOffset: s.attributes["TIME-OFFSET"],
                      precise: s.attributes.PRECISE,
                    };
                  },
                  "cue-out"() {
                    i.cueOut = s.data;
                  },
                  "cue-out-cont"() {
                    i.cueOutCont = s.data;
                  },
                  "cue-in"() {
                    i.cueIn = s.data;
                  },
                  skip() {
                    ((this.manifest.skip = J(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-SKIP", s.attributes, [
                        "SKIPPED-SEGMENTS",
                      ]));
                  },
                  part() {
                    l = !0;
                    let m = this.manifest.segments.length,
                      f = J(s.attributes);
                    ((i.parts = i.parts || []),
                      i.parts.push(f),
                      f.byterange &&
                        (f.byterange.hasOwnProperty("offset") || (f.byterange.offset = y),
                        (y = f.byterange.offset + f.byterange.length)));
                    let h = i.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${h} for segment #${m}`,
                      s.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((R, T) => {
                          R.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${T} lacks required attribute(s): LAST-PART`,
                            });
                        }));
                  },
                  "server-control"() {
                    let m = (this.manifest.serverControl = J(s.attributes));
                    (m.hasOwnProperty("canBlockReload") ||
                      ((m.canBlockReload = !1),
                      this.trigger("info", {
                        message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      We.call(this, this.manifest),
                      m.canSkipDateranges &&
                        !m.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let m = this.manifest.segments.length,
                      f = J(s.attributes),
                      h = f.type && f.type === "PART";
                    ((i.preloadHints = i.preloadHints || []),
                      i.preloadHints.push(f),
                      f.byterange &&
                        (f.byterange.hasOwnProperty("offset") ||
                          ((f.byterange.offset = h ? y : 0),
                          h && (y = f.byterange.offset + f.byterange.length))));
                    let R = i.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${R} for segment #${m}`,
                        s.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!f.type)
                    )
                      for (let T = 0; T < i.preloadHints.length - 1; T++) {
                        let V = i.preloadHints[T];
                        V.type &&
                          V.type === f.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${R} for segment #${m} has the same TYPE ${f.type} as preload hint #${T}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let m = J(s.attributes);
                    ((this.manifest.renditionReports = this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(m));
                    let f = this.manifest.renditionReports.length - 1,
                      h = ["LAST-MSN", "URI"];
                    (l && h.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${f}`,
                        s.attributes,
                        h,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = J(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-PART-INF", s.attributes, [
                        "PART-TARGET",
                      ]),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                      We.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(J(s.attributes));
                    let m = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${m}`, s.attributes, [
                      "ID",
                      "START-DATE",
                    ]);
                    let f = this.manifest.dateRanges[m];
                    (f.endDate &&
                      f.startDate &&
                      new Date(f.endDate) < new Date(f.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      f.duration &&
                        f.duration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      f.plannedDuration &&
                        f.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let h = !!f.endOnNext;
                    if (
                      (h &&
                        !f.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      h &&
                        (f.duration || f.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      f.duration && f.endDate)
                    ) {
                      let T = f.startDate.getTime() + f.duration * 1e3;
                      this.manifest.dateRanges[m].endDate = new Date(T);
                    }
                    if (!A[f.id]) A[f.id] = f;
                    else {
                      for (let T in A[f.id])
                        if (f[T] && JSON.stringify(A[f.id][T]) !== JSON.stringify(f[T])) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let R = this.manifest.dateRanges.findIndex((T) => T.id === f.id);
                      ((this.manifest.dateRanges[R] = ae(this.manifest.dateRanges[R], f)),
                        (A[f.id] = ae(A[f.id], f)),
                        this.manifest.dateRanges.pop());
                    }
                  },
                  "independent-segments"() {
                    this.manifest.independentSegments = !0;
                  },
                  "i-frames-only"() {
                    ((this.manifest.iFramesOnly = !0),
                      this.requiredCompatibilityversion(this.manifest.version, 4));
                  },
                  "content-steering"() {
                    ((this.manifest.contentSteering = J(s.attributes)),
                      this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", s.attributes, [
                        "SERVER-URI",
                      ]));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let m = (f, h) => {
                      if (f in this.manifest.definitions) {
                        this.trigger("error", { message: `EXT-X-DEFINE: Duplicate name ${f}` });
                        return;
                      }
                      this.manifest.definitions[f] = h;
                    };
                    if ("QUERYPARAM" in s.attributes) {
                      if ("NAME" in s.attributes || "IMPORT" in s.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      let f = this.params.get(s.attributes.QUERYPARAM);
                      if (!f) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${s.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      m(s.attributes.QUERYPARAM, decodeURIComponent(f));
                      return;
                    }
                    if ("NAME" in s.attributes) {
                      if ("IMPORT" in s.attributes) {
                        this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
                        return;
                      }
                      if (!("VALUE" in s.attributes) || typeof s.attributes.VALUE != "string") {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value for ${s.attributes.NAME}`,
                        });
                        return;
                      }
                      m(s.attributes.NAME, s.attributes.VALUE);
                      return;
                    }
                    if ("IMPORT" in s.attributes) {
                      if (!this.mainDefinitions[s.attributes.IMPORT]) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value ${s.attributes.IMPORT} to import, or IMPORT used on main playlist`,
                        });
                        return;
                      }
                      m(s.attributes.IMPORT, this.mainDefinitions[s.attributes.IMPORT]);
                      return;
                    }
                    this.trigger("error", { message: "EXT-X-DEFINE: No attribute" });
                  },
                  "i-frame-playlist"() {
                    (this.manifest.iFramePlaylists.push({
                      attributes: s.attributes,
                      uri: s.uri,
                      timeline: p,
                    }),
                      this.warnOnMissingAttributes_("#EXT-X-I-FRAME-STREAM-INF", s.attributes, [
                        "BANDWIDTH",
                        "URI",
                      ]));
                  },
                })[s.tagType] || d
              ).call(r);
            },
            uri() {
              ((i.uri = s.uri),
                a.push(i),
                this.manifest.targetDuration &&
                  !("duration" in i) &&
                  (this.trigger("warn", {
                    message: "defaulting segment duration to the target duration",
                  }),
                  (i.duration = this.manifest.targetDuration)),
                n && (i.key = n),
                (i.timeline = p),
                o && (i.map = o),
                (y = 0),
                this.lastProgramDateTime !== null &&
                  ((i.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += i.duration * 1e3)),
                (i = {}));
            },
            comment() {},
            custom() {
              s.segment
                ? ((i.custom = i.custom || {}), (i.custom[s.customType] = s.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[s.customType] = s.data));
            },
          })[s.type].call(r);
        }));
    }
    requiredCompatibilityversion(t, r) {
      (t < r || !t) && this.trigger("warn", { message: `manifest must be at least version ${r}` });
    }
    warnOnMissingAttributes_(t, r, a) {
      let i = [];
      (a.forEach(function (o) {
        r.hasOwnProperty(o) || i.push(o);
      }),
        i.length &&
          this.trigger("warn", { message: `${t} lacks required attribute(s): ${i.join(", ")}` }));
    }
    push(t) {
      this.lineStream.push(t);
    }
    end() {
      (this.lineStream.push(`
`),
        this.manifest.dateRanges.length &&
          this.lastProgramDateTime === null &&
          this.trigger("warn", {
            message:
              "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag",
          }),
        (this.lastProgramDateTime = null),
        this.trigger("end"));
    }
    addParser(t) {
      this.parseStream.addParser(t);
    }
    addTagMapper(t) {
      this.parseStream.addTagMapper(t);
    }
  };
var Go = new Error("timeout while waiting for mutex to become available"),
  Yo = new Error("mutex already locked"),
  gr = new Error("request for lock canceled"),
  yr = function (e, t, r, a) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (n) {
            n(o);
          });
    }
    return new (r || (r = Promise))(function (o, n) {
      function l(u) {
        try {
          _(a.next(u));
        } catch (p) {
          n(p);
        }
      }
      function d(u) {
        try {
          _(a.throw(u));
        } catch (p) {
          n(p);
        }
      }
      function _(u) {
        u.done ? o(u.value) : i(u.value).then(l, d);
      }
      _((a = a.apply(e, t || [])).next());
    });
  },
  Ve = class {
    constructor(t, r = gr) {
      ((this._value = t),
        (this._cancelError = r),
        (this._queue = []),
        (this._weightedWaiters = []));
    }
    acquire(t = 1, r = 0) {
      if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
      return new Promise((a, i) => {
        let o = { resolve: a, reject: i, weight: t, priority: r },
          n = gt(this._queue, (l) => r <= l.priority);
        n === -1 && t <= this._value ? this._dispatchItem(o) : this._queue.splice(n + 1, 0, o);
      });
    }
    runExclusive(t) {
      return yr(this, arguments, void 0, function* (r, a = 1, i = 0) {
        let [o, n] = yield this.acquire(a, i);
        try {
          return yield r(o);
        } finally {
          n();
        }
      });
    }
    waitForUnlock(t = 1, r = 0) {
      if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
      return this._couldLockImmediately(t, r)
        ? Promise.resolve()
        : new Promise((a) => {
            (this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []),
              Er(this._weightedWaiters[t - 1], { resolve: a, priority: r }));
          });
    }
    isLocked() {
      return this._value <= 0;
    }
    getValue() {
      return this._value;
    }
    setValue(t) {
      ((this._value = t), this._dispatchQueue());
    }
    release(t = 1) {
      if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
      ((this._value += t), this._dispatchQueue());
    }
    cancel() {
      (this._queue.forEach((t) => t.reject(this._cancelError)), (this._queue = []));
    }
    _dispatchQueue() {
      for (
        this._drainUnlockWaiters();
        this._queue.length > 0 && this._queue[0].weight <= this._value;
      )
        (this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters());
    }
    _dispatchItem(t) {
      let r = this._value;
      ((this._value -= t.weight), t.resolve([r, this._newReleaser(t.weight)]));
    }
    _newReleaser(t) {
      let r = !1;
      return () => {
        r || ((r = !0), this.release(t));
      };
    }
    _drainUnlockWaiters() {
      if (this._queue.length === 0)
        for (let t = this._value; t > 0; t--) {
          let r = this._weightedWaiters[t - 1];
          r && (r.forEach((a) => a.resolve()), (this._weightedWaiters[t - 1] = []));
        }
      else {
        let t = this._queue[0].priority;
        for (let r = this._value; r > 0; r--) {
          let a = this._weightedWaiters[r - 1];
          if (!a) continue;
          let i = a.findIndex((o) => o.priority <= t);
          (i === -1 ? a : a.splice(0, i)).forEach((o) => o.resolve());
        }
      }
    }
    _couldLockImmediately(t, r) {
      return (this._queue.length === 0 || this._queue[0].priority < r) && t <= this._value;
    }
  };
function Er(e, t) {
  let r = gt(e, (a) => t.priority <= a.priority);
  e.splice(r + 1, 0, t);
}
function gt(e, t) {
  for (let r = e.length - 1; r >= 0; r--) if (t(e[r])) return r;
  return -1;
}
function U(e, t) {
  let r = (BigInt(t) << BigInt(32)) | BigInt(e);
  return BigInt(r);
}
function De(e) {
  let t = Number(e & 0xffffffffn),
    r = Number(e >> 32n);
  return { lo: t, hi: r };
}
function yt(e) {
  let t, r;
  return (
    e.av.audio && e.av.audio.packets.length && (t = e.av.audio.packets[0]),
    e.av.video && e.av.video.packets.length && (r = e.av.video.packets[0]),
    !t || !r ? !1 : wt(t, r)
  );
}
function Et(e, t) {
  let r, a;
  return (
    e.av.audio && e.av.audio.packets.length && (r = e.av.audio.packets[0]),
    t.av.video && t.av.video.packets.length && (a = t.av.video.packets[0]),
    !r || !a ? !1 : wt(r, a)
  );
}
function wt(e, t) {
  if (!e.time_base_num || !e.time_base_den || !t.time_base_num || !t.time_base_den) return !1;
  let r = U(e.pts, e.ptshi),
    a = U(e.duration, e.durationhi),
    i = U(t.pts, t.ptshi),
    o = U(t.duration, t.durationhi);
  if (a == 0n || o == 0n) return !1;
  let n = 250000000n,
    l = 1000000000n,
    d = (r * BigInt(e.time_base_num) * l) / BigInt(e.time_base_den),
    _ = (i * BigInt(t.time_base_num) * l) / BigInt(t.time_base_den),
    u = d - _;
  return (u < 0 ? -u : u) > n;
}
function le(e) {
  let t = e[0];
  if (U(t.pts, t.ptshi) == 0n) return Q(e);
  let a = 0n,
    i = 0n;
  ((t.dts = 0), (t.dtshi = 0), (t.pts = 0), (t.ptshi = 0));
  let o = U(t.duration, t.durationhi);
  for (let n = 1; n < e.length; ++n) {
    let l = e[n],
      d = a + o,
      _ = i + o;
    ((a = d), (i = _), (o = U(l.duration, l.durationhi)));
    let { lo: u, hi: p } = De(d),
      { lo: c, hi: y } = De(_);
    ((l.dts = u), (l.dtshi = p), (l.pts = c), (l.ptshi = y));
  }
  return { last_dts: a, last_pts: i, last_duration: o, force_recompute_timings: !0 };
}
function Q(e) {
  let t = e.length - 1,
    r = e[t].dts,
    a = e[t].dtshi || 0,
    i = U(r, a),
    o = e[t].pts,
    n = e[t].ptshi || 0,
    l = U(o, n),
    d = U(e[t].duration, e[t].durationhi);
  return { last_dts: i, last_pts: l, last_duration: d };
}
function ue(e, t) {
  let { last_dts: r, last_pts: a, last_duration: i } = t,
    o = e[0],
    n = U(o.dts, o.dtshi || 0),
    l = U(o.pts, o.ptshi || 0);
  if ((!t.force_recompute_timings && n > r && l > a) || i == 0n) return Q(e);
  for (let d of e) {
    let _ = r + i,
      u = a + i;
    ((r = _), (a = u), (i = U(d.duration, d.durationhi)));
    let { lo: p, hi: c } = De(_),
      { lo: y, hi: A } = De(u);
    ((d.dts = p), (d.dtshi = c), (d.pts = y), (d.ptshi = A));
  }
  return {
    last_dts: r,
    last_pts: a,
    last_duration: i,
    force_recompute_timings: t.force_recompute_timings,
  };
}
async function bt(e, t, r) {
  if (r.length !== 16) throw new Error("IV must be 16 bytes (128 bits).");
  if (t.length !== 16) throw new Error("Key must be 16 bytes (128 bits).");
  try {
    let a = await crypto.subtle.importKey("raw", t, { name: "AES-CBC" }, !1, ["decrypt"]),
      i = await crypto.subtle.decrypt({ name: "AES-CBC", iv: r }, a, e);
    return S(new Uint8Array(i));
  } catch {
    return v({ type: "decryption_failed" });
  }
}
var Pe = class {
  constructor() {
    this.map = new Map();
  }
  getInitKey(t) {
    return t.byte_range ? `${t.url}-${t.byte_range.offset}-${t.byte_range.length}` : `${t.url}`;
  }
  has(t) {
    return this.map.has(this.getInitKey(t));
  }
  set(t, r) {
    return this.map.set(this.getInitKey(t), r);
  }
  get(t) {
    return this.map.get(this.getInitKey(t));
  }
};
var vt = 3e4;
async function Z(...e) {
  let t;
  try {
    t = await fetch(...e);
  } catch (r) {
    return r instanceof DOMException && r.name == "AbortError" ? v(re()) : v(P(r.toString()));
  }
  return t.status >= 400 && t.status <= 599
    ? v(Te(t.status))
    : t.ok
      ? t.body != null
        ? S(t)
        : v(P("No body"))
      : v(P(`Unkown failure - status ${t.status}`));
}
async function ie(e) {
  try {
    let t,
      r = new Promise((i) => {
        t = setTimeout(() => {
          i(v(P("Timeout")));
        }, vt);
      }),
      a = e.read().then((i) => (clearTimeout(t), S(i)));
    return await Promise.race([r, a]);
  } catch (t) {
    return t instanceof DOMException && t.name == "AbortError" ? v(re()) : v(P(t.toString()));
  }
}
async function Tt(e) {
  try {
    let t = new Promise((a) => setTimeout(() => a(v(P("Timeout"))), vt)),
      r = e.text().then((a) => S(a));
    return await Promise.race([t, r]);
  } catch (t) {
    return t instanceof DOMException && t.name == "AbortError" ? v(re()) : v(P(t.toString()));
  }
}
var B = { Audio: 0, Video: 1 };
var br = ["loom.com"];
function St(e) {
  return br.some((t) => e.href.includes(t));
}
var vr = ["mp4", "webm", "mkv"],
  Tr = ["mp3", "m4a", "ogg"],
  Sr = [...vr, ...Tr];
function Vt(e) {
  let t = new Date(new Date().getTime() - 6e5);
  return !e.dateTimeObject && !e.programDateTime
    ? !1
    : typeof e.dateTimeObject == "object"
      ? e.dateTimeObject > t
      : typeof e.programDateTime == "number"
        ? e.programDateTime > t.getTime()
        : !1;
}
var Pr = 0.35,
  Re = 5,
  Ir = 1500,
  Rr = 500,
  xr = 4,
  Rt = 5,
  te = new X(),
  g = await se.LibAV({ noworker: !0 });
g.onwrite = te.onwrite.bind(te);
async function ee(e) {
  (await g.avformat_close_input_js(e.fmt_ctx),
    await g.av_packet_free_js(e.pkt),
    await g.unlink(e.filename_tmp));
}
async function qe(e, t, r) {
  let a = new Headers(t.headers);
  r && a.set("Range", `bytes=${r.offset}-${r.offset + r.length - 1}`);
  let i = await Z(e, { headers: a, signal: t.signal, cache: t.cache });
  if (i.isErr()) return i;
  t.known_segments_url.add(e);
  let o = i.value,
    n = new Uint8Array();
  {
    let l = o.body.getReader();
    for (;;) {
      let d = await ie(l);
      if (d.isErr()) return d;
      let { done: _, value: u } = d.value;
      if (_) break;
      let p = n.length;
      ((n = new Uint8Array(n.buffer.transfer(n.length + u.length))),
        n.set(u, p),
        t.progress_tracker?.add_bytes(u.length));
    }
  }
  return S(new Uint8Array(n));
}
async function Dt(e, t, r, a, i) {
  if (!a.has(t)) {
    let n = await qe(t, i, void 0);
    if (n.isErr()) return n;
    a.set(t, n.value);
  }
  let o = await bt(e, a.get(t), r);
  return S(o);
}
async function Mr(e, t) {
  let r = await qe(e.url, t.fetch_args, e.byte_range);
  if (r.isErr()) return r;
  let a = r.value;
  if (e.encryption?.url) {
    let o = await Dt(a, e.encryption.url, e.encryption.iv, t.keys, t.fetch_args);
    if (o.isErr() || o.value.isErr()) return o;
    a = o.value.value;
  }
  if (!e.init) return S(S(a));
  if (!t.inits.has(e.init)) {
    let o = await qe(e.init.url, t.fetch_args, e.init.byte_range);
    if (o.isErr()) return o;
    let n = o.value;
    if (e.init.encryption) {
      let l = await Dt(n, e.init.encryption.url, e.init.encryption.iv, t.keys, t.fetch_args);
      if (l.isErr() || l.value.isErr()) return l;
      n = l.value.value;
    }
    t.inits.set(e.init, new Uint8Array(n));
  }
  let i = new Uint8Array([...t.inits.get(e.init), ...a]);
  return S(S(i));
}
function Ie(e, t, r, a) {
  return e.semaphore.runExclusive(() => de(t, e, a, !1), 1, r);
}
function Fr(e) {
  let t = [137, 80, 78, 71, 13, 10, 26, 10],
    r = [73, 69, 78, 68, 174, 66, 96, 130];
  for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return -1;
  let a = r.length,
    i = e.length;
  if (a === 0 || a > i) return -1;
  let o = r[0];
  for (let n = t.length; n <= i - a; n++) {
    if (e[n] !== o) continue;
    let l = !0;
    for (let d = 1; d < a; d++)
      if (e[n + d] !== r[d]) {
        l = !1;
        break;
      }
    if (l) return n;
  }
  return -1;
}
async function Pt(e, t, r) {
  try {
    let a = await Mr(e, t);
    if (a.isErr()) return a;
    if (a.value.isErr()) return S(v(a.value.error));
    let i = a.value.value,
      o = Fr(i);
    o >= 0 && (i = i.subarray(o, i.length));
    let n = `${crypto.randomUUID()}.tmp`;
    await g.writeFile(n, i);
    let [l, d] = await g.ff_init_demuxer_file(n),
      _ = d.find((E) => E.codec_type === g.AVMEDIA_TYPE_VIDEO);
    if (!_ && r == B.Video) return S(v({ type: "bad_segment" }));
    let u = d.find((E) => E.codec_type === g.AVMEDIA_TYPE_AUDIO);
    if (!u && r == B.Audio) return S(v({ type: "bad_segment" }));
    let p = await g.av_packet_alloc(),
      [c, y] = await g.ff_read_frame_multi(l, p);
    if (c !== g.AVERROR_EOF) return S(v({ type: "bad_segment" }));
    let A, s;
    if (u) {
      s = y[u.index];
      for (let E of s) E.stream_index = 0;
    }
    if (_) {
      A = y[_.index];
      for (let E of A) u || t.expect_two_streams ? (E.stream_index = 1) : (E.stream_index = 0);
    }
    let w;
    return (
      u && _
        ? (w = { video: { stream: _, packets: A }, audio: { stream: u, packets: s } })
        : _
          ? (w = { video: { stream: _, packets: A }, audio: !1 })
          : (w = { video: !1, audio: { stream: u, packets: s } }),
      S(S({ av: w, pkt: p, fmt_ctx: l, filename_tmp: n, is_live: e.is_live }))
    );
  } catch {
    return S(v({ type: "bad_segment" }));
  }
}
function It(e) {
  if ("byterange" in e && "length" in e.byterange && "offset" in e.byterange) {
    let r = e.byterange,
      a = r.offset,
      i = r.length;
    return { offset: a, length: i };
  }
}
function Or(e) {
  let t = new Uint8Array(16);
  return (new DataView(t.buffer).setUint32(12, e, !1), t);
}
function kr(e) {
  let t = new Uint8Array(e.length * 4);
  for (let r = 0; r < e.length; r++) {
    let a = e[r],
      i = r * 4;
    ((t[i + 0] = (a >>> 24) & 255),
      (t[i + 1] = (a >>> 16) & 255),
      (t[i + 2] = (a >>> 8) & 255),
      (t[i + 3] = a & 255));
  }
  return t;
}
async function K(e, t, r, a) {
  let i = v(P(""));
  for (let _ = 0; _ < Rt && ((i = await Z(e, { headers: t, signal: r, cache: a })), !i.isOk()); ++_)
    if (i.error.user_abort) break;
  if (i.isErr()) return i;
  let o = await Tt(i.value);
  if (o.isErr()) return o;
  let n = null;
  try {
    let _ = new ye();
    (_.push(o.value), _.end(), (n = _.manifest));
  } catch {}
  let l = n.mediaSequence;
  !n && Array.isArray(n.segments) && M("Parsing error");
  let d = n.segments.map((_) => {
    let u = _.uri,
      p = Vt(_),
      c = new URL(u, e);
    St(c) && e.search && (c.search = e.search);
    let y = { url: c.href, is_live: p, sequence_number: l };
    if (
      (typeof _.duration == "number" && (y.duration_s = _.duration), _.key?.method == "AES-128")
    ) {
      let w = _.key?.uri,
        E;
      (!_.key.iv && (!_.attributes?.KEYFORMAT || _.attributes.KEYFORMAT == "identity")
        ? (E = Or(l))
        : (E = kr(_.key.iv)),
        (y.encryption = { url: new URL(w, e).href, iv: E }));
    }
    let A = It(_);
    A && (y.byte_range = A);
    let s = _.map;
    if (s && "uri" in s) {
      let w = s.uri,
        E = new URL(w, e).href;
      if (((y.init = { url: E }), _.map.key?.method == "AES-128")) {
        let f = _.map.key.uri,
          h = _.map.key.iv;
        ((h = new Uint8Array(h.buffer)), (y.init.encryption = { url: new URL(f, e).href, iv: h }));
      }
      let m = It(s);
      m && (y.init.byte_range = m);
    }
    return (l++, y);
  });
  return S(d);
}
async function je(e, t, r) {
  let a = await g.av_write_trailer(e);
  if (a != 0) {
    let i = await g.strerror(a);
    return v(i);
  }
  return (await g.ff_free_muxer(e, t), await te.close(r), await g.unlink(r), S(r));
}
async function Je(e, t, r, a) {
  if (e.isErr() || e.value == "skip" || !e.value.is_live) return !1;
  let i = await a();
  return i.isErr()
    ? !1
    : i.value == !0
      ? (t.progress_tracker?.dont_trust_percent(), (r.value = Re), !0)
      : r.value > 0
        ? (r.value--, await new Promise((o) => setTimeout(o, Ir)), !0)
        : !1;
}
async function de(e, t, r, a) {
  let i = await Pt(e, t, r);
  for (let n = 0; n < Rt - 1 && !(i.isOk() || i.error.user_abort); n++)
    (await new Promise((l) => setTimeout(l, Rr * n)), (i = await Pt(e, t, r)));
  if (i.isErr()) return i;
  if (i.value.isOk())
    return (
      e.duration_s &&
        ((t.duration_s += e.duration_s),
        t.fetch_args.progress_tracker?.set_duration_in_s(t.duration_s)),
      S(i.value.value)
    );
  let o = i.value.error;
  if (o.type == "bad_segment")
    return (
      t.failures.count++,
      a
        ? v(P("Required segment was invalid, aborting download."))
        : t.failures.count / t.total_segments > Pr
          ? v(P("Too many invalid segments, aborting download."))
          : S("skip")
    );
  if (o.type == "decryption_failed") return v(P("Decryption failed."));
  (o.type, M("unreachable"));
}
async function xt(e, t) {
  let r = await K(e.url, e.headers, t, e.cache);
  if (r.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: r.error };
  let a = r.value,
    i = a[0];
  i || M("Video Media Manifest does not contain video URLs");
  let o = xe(e, t, a.length, !1);
  await te.open(o.output_filename);
  let n = i.is_live,
    l;
  n ? (l = a.length - 1) : (l = Math.floor(a.length / 2));
  let d = await de(a[l], o, B.Video, !0);
  if (d.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: d.error };
  d.value == "skip" && M("Can't skip segment early");
  let _ = d.value;
  _.av.video || M("No video for preview");
  let u = [];
  if (_.av.audio) {
    let w = _.av.audio.stream;
    u.push([w.codecpar, w.time_base_num, w.time_base_den]);
  }
  if (_.av.video) {
    let w = _.av.video.stream;
    u.push([w.codecpar, w.time_base_num, w.time_base_den]);
  } else M("No video for preview");
  let p = { filename: o.output_filename, open: !0, codecpars: !0, device: !0 },
    [c, , y] = await g.ff_init_muxer(p, u),
    A = await g.av_opt_set(c, "avoid_negative_ts", "make_zero", 0);
  (pe(g, A),
    (A = await g.avformat_write_header(c, 0)),
    me(g, A),
    await g.ff_write_multi(c, _.pkt, _.av.video.packets),
    _.av.audio && (await g.ff_write_multi(c, _.pkt, _.av.audio.packets)),
    await ee(_));
  let s = await je(c, y, o.output_filename);
  return (
    s.isErr() && M(s.error),
    {
      aborted_no_partial: !1,
      internal_filename: s.value,
      internal_bloburl: void 0,
      download_id: e.download_id,
      ending_reason: "end_of_file",
    }
  );
}
function xe(e, t, r, a) {
  let i = e.throttle ? 1 : xr;
  return {
    semaphore: new Ve(i),
    inits: new Pe(),
    keys: new Map(),
    fetch_args: {
      signal: t,
      headers: e.headers,
      known_segments_url: new Set(),
      progress_tracker: new Y(e.download_id),
      cache: e.cache,
    },
    failures: { count: 0 },
    muxer: e.muxer,
    output_filename: `${e.download_id}.${e.extension}`,
    expect_two_streams: a,
    total_segments: r,
    duration_s: 0,
  };
}
async function Mt(e, t) {
  let r = await K(e.url, e.headers, t, e.cache);
  if (r.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: r.error };
  let a = r.value;
  a.length == 0 && M("Video Media Manifest does not contain video URLs");
  let i = await K(e.url_audio, e.headers, t, e.cache);
  if (i.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: i.error };
  let o = i.value;
  o.length == 0 && M("Media Manifest does not contain audio URLs");
  let n = xe(e, t, a.length + o.length, !0);
  await te.open(n.output_filename);
  let l = await de(a[0], n, B.Video, !0),
    d = await de(o[0], n, B.Audio, !0);
  if (l.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: l.error };
  let _ = l.value;
  if (_ == "skip")
    return {
      aborted_no_partial: !0,
      download_id: e.download_id,
      ending_reason: P("First segment was invalid and skipped, aborting."),
    };
  if (d.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: d.error };
  let u = d.value;
  if (u == "skip")
    return {
      aborted_no_partial: !0,
      download_id: e.download_id,
      ending_reason: P("First segment was invalid and skipped, aborting."),
    };
  (a.shift(), o.shift());
  let p = [];
  if (u.av.audio) {
    let b = u.av.audio.stream;
    p.push([b.codecpar, b.time_base_num, b.time_base_den]);
  }
  if (_.av.video) {
    let b = _.av.video.stream;
    p.push([b.codecpar, b.time_base_num, b.time_base_den]);
  }
  let c = e.muxer == "mkv" ? "matroska" : e.muxer,
    y = { filename: n.output_filename, open: !0, codecpars: !0, device: !0, format_name: c },
    [A, , s] = await g.ff_init_muxer(y, p),
    w = await g.av_opt_set(A, "avoid_negative_ts", "make_zero", 0);
  (pe(g, w), (w = await g.avformat_write_header(A, 0)), me(g, w));
  let E = Et(u, _),
    m;
  _.av.video &&
    ((m = E ? le(_.av.video.packets) : Q(_.av.video.packets)),
    await g.ff_write_multi(A, _.pkt, _.av.video.packets));
  let f;
  (u.av.audio &&
    ((f = E ? le(u.av.audio.packets) : Q(u.av.audio.packets)),
    await g.ff_write_multi(A, u.pkt, u.av.audio.packets)),
    await ee(_),
    await ee(u));
  let h = v(P("not started")),
    R = { value: Re },
    T = !1;
  for (;;) {
    let b = [],
      N = Math.max(a.length, o.length);
    for (let x = 0; x < N; x++) {
      let I = N - x;
      if (x < a.length) {
        let ne = Ie(n, a[x], I, B.Video);
        b.push(ne);
      }
      if (x < o.length) {
        let ne = Ie(n, o[x], I, B.Audio);
        b.push(ne);
      }
    }
    let $ = -1;
    for (; b.length > 0 && ($++, (h = await b.shift()), !h.isErr()); ) {
      if (h.value == "skip") continue;
      let I = h.value;
      (I.av.video
        ? ((m = ue(I.av.video.packets, m)), await g.ff_write_multi(A, I.pkt, I.av.video.packets))
        : I.av.audio &&
          ((f = ue(I.av.audio.packets, f)), await g.ff_write_multi(A, I.pkt, I.av.audio.packets)),
        n.fetch_args.progress_tracker?.set_percent(100 * ($ / n.total_segments)),
        await ee(I));
    }
    if (
      ((T = await Je(h, n.fetch_args, R, async () => {
        let x = await K(e.url, e.headers, t, e.cache);
        if (x.isErr()) return x;
        let I = await K(e.url_audio, e.headers, t, e.cache);
        if (I.isErr()) return I;
        ((a = x.value.filter(({ url: ce }) => !n.fetch_args.known_segments_url.has(ce))),
          (o = I.value.filter(({ url: ce }) => !n.fetch_args.known_segments_url.has(ce))));
        let ne = a.length > 0 || o.length > 0;
        return S(ne);
      })),
      !T)
    )
      break;
  }
  let V = await je(A, s, n.output_filename);
  return (
    V.isErr() && M(V.error),
    {
      aborted_no_partial: !1,
      internal_filename: V.value,
      internal_bloburl: await C(e, V.value),
      download_id: e.download_id,
      ending_reason: h.isOk() ? "end_of_file" : h.error,
    }
  );
}
async function Ft(e, t) {
  let r = await K(e.url, e.headers, t, e.cache);
  if (r.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: r.error };
  let a = r.value;
  a.length == 0 && M("Video Media Manifest does not contain video URLs");
  let i = xe(e, t, a.length, !1);
  await te.open(i.output_filename);
  let o = await de(a[0], i, B.Video, !0);
  if (o.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: o.error };
  let n = o.value;
  if (n == "skip")
    return {
      aborted_no_partial: !0,
      download_id: e.download_id,
      ending_reason: P("First segment was invalid and skipped, aborting."),
    };
  a.shift();
  let l = [];
  if (n.av.audio) {
    let h = n.av.audio.stream;
    l.push([h.codecpar, h.time_base_num, h.time_base_den]);
  }
  if (n.av.video) {
    let h = n.av.video.stream;
    l.push([h.codecpar, h.time_base_num, h.time_base_den]);
  }
  let d = e.muxer == "mkv" ? "matroska" : e.muxer,
    _ = { filename: i.output_filename, open: !0, codecpars: !0, device: !0, format_name: d },
    [u, , p] = await g.ff_init_muxer(_, l),
    c = await g.av_opt_set(u, "avoid_negative_ts", "make_zero", 0);
  (pe(g, c), (c = await g.avformat_write_header(u, 0)), me(g, c));
  let y = yt(n),
    A;
  n.av.video &&
    ((A = y ? le(n.av.video.packets) : Q(n.av.video.packets)),
    await g.ff_write_multi(u, n.pkt, n.av.video.packets));
  let s;
  (n.av.audio &&
    ((s = y ? le(n.av.audio.packets) : Q(n.av.audio.packets)),
    await g.ff_write_multi(u, n.pkt, n.av.audio.packets)),
    await ee(n));
  let w = v(P("not started")),
    E = { value: Re },
    m = !1;
  for (;;) {
    let h = [];
    for (let T = 0; T < a.length; T++) {
      let V = a.length - T,
        b = Ie(i, a[T], V, B.Video);
      h.push(b);
    }
    let R = -1;
    for (; h.length > 0 && (R++, (w = await h.shift()), !w.isErr()); ) {
      if (w.value == "skip") continue;
      let V = w.value;
      (V.av.video &&
        ((A = ue(V.av.video.packets, A)), await g.ff_write_multi(u, V.pkt, V.av.video.packets)),
        V.av.audio &&
          ((s = ue(V.av.audio.packets, s)), await g.ff_write_multi(u, V.pkt, V.av.audio.packets)),
        i.fetch_args.progress_tracker?.set_percent(100 * (R / i.total_segments)),
        await ee(V));
    }
    if (
      !w ||
      ((m = await Je(w, i.fetch_args, E, async () => {
        let T = await K(e.url, e.headers, t, e.cache);
        return T.isErr()
          ? T
          : ((a = T.value.filter(({ url: V }) => !i.fetch_args.known_segments_url.has(V))),
            S(a.length > 0));
      })),
      !m)
    )
      break;
  }
  let f = await je(u, p, i.output_filename);
  return (
    f.isErr() && M(f.error),
    {
      aborted_no_partial: !1,
      internal_filename: f.value,
      internal_bloburl: await C(e, f.value),
      download_id: e.download_id,
      ending_reason: w.isOk() ? "end_of_file" : w.error,
    }
  );
}
async function Ot(e, t) {
  let i = e.url,
    o = await K(i, e.headers, t, e.cache);
  if (o.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: o.error };
  let n = o.value;
  n.length == 0 && M("Audio Media Manifest does not contain audio URLs");
  let l = xe(e, t, n.length, !1),
    d = await de(n[0], l, B.Audio, !0);
  if (d.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: d.error };
  let _ = d.value;
  if (_ == "skip")
    return {
      aborted_no_partial: !0,
      download_id: e.download_id,
      ending_reason: P("First segment was invalid and skipped, aborting."),
    };
  n.shift();
  let u;
  (_.av.audio && (u = le(_.av.audio.packets)), _.av.audio || M("No audio stream found"));
  let p = _.av.audio.stream,
    [, c, y, A] = await g.ff_init_decoder(p.codec_id, p.codecpar),
    s = await g.ff_decode_multi(c, y, A, _.av.audio.packets, { fin: !1 }),
    w = "aresample=isf=s16p:osf=fltp,asetnsamples=n=1152:p=0",
    [E, m, f] = await g.ff_init_filter_graph(
      w,
      {
        sample_rate: s[0].sample_rate,
        sample_fmt: s[0].format,
        channel_layout: s[0].channel_layout,
      },
      { sample_rate: 44100, sample_fmt: g.AV_SAMPLE_FMT_FLTP, channel_layout: s[0].channel_layout },
    ),
    h = await g.ff_filter_multi(m, f, A, s, { fin: !1 }),
    [R, T, V, b, N] = await g.ff_init_encoder("libmp3lame", {
      ctx: {
        bit_rate: 128e3,
        sample_fmt: g.AV_SAMPLE_FMT_FLTP,
        sample_rate: 44100,
        channel_layout: s[0].channel_layout,
        channels: s[0].channels,
      },
      time_base: [1, 44100],
    }),
    $ = await g.ff_encode_multi(T, V, b, h, !1);
  await te.open(l.output_filename);
  let x = { filename: l.output_filename, open: !0, codecpars: !1, device: !0, format_name: "mp3" },
    [I, ne, ce, [Gr]] = await g.ff_init_muxer(x, [[T, 1, 44100]]),
    oe = await g.av_opt_set(I, "avoid_negative_ts", "make_zero", 0);
  (pe(g, oe),
    (oe = await g.avformat_write_header(I, 0)),
    me(g, oe),
    await g.ff_write_multi(I, b, $),
    await ee(_));
  let q = v(P("not started")),
    Kt = { value: Re },
    et = !1;
  for (;;) {
    let fe = [];
    for (let G = 0; G < n.length; G++) {
      let W = n.length - G,
        Fe = Ie(l, n[G], W, B.Audio);
      fe.push(Fe);
    }
    let Me = -1;
    for (; fe.length > 0 && (Me++, (q = await fe.shift()), !q.isErr()); ) {
      if (q.value == "skip") continue;
      let W = q.value;
      (W.av.audio || M(`No audio found in segment ${Me + 1}`), (u = ue(W.av.audio.packets, u)));
      let Fe = await g.ff_decode_multi(c, y, A, W.av.audio.packets, { fin: !1 }),
        qt = await g.ff_filter_multi(m, f, A, Fe, { fin: !1 }),
        jt = await g.ff_encode_multi(T, V, b, qt, !1);
      (await g.ff_write_multi(I, W.pkt, jt),
        l.fetch_args.progress_tracker?.set_percent(100 * (Me / l.total_segments)),
        await ee(W));
    }
    if (!q) break;
    if (
      ((et = await Je(q, l.fetch_args, Kt, async () => {
        let G = await K(i, e.headers, t, e.cache);
        return G.isErr()
          ? G
          : ((n = G.value.filter(({ url: W }) => !l.fetch_args.known_segments_url.has(W))),
            S(n.length > 0));
      })),
      !et)
    ) {
      let G = await g.ff_encode_multi(T, V, b, [], !0);
      await g.ff_write_multi(I, 0, G);
      break;
    }
  }
  if (((oe = await g.av_write_trailer(I)), oe != 0)) {
    let fe = await g.strerror(oe);
    M(fe);
  }
  return (
    await g.ff_free_decoder(c, y, A),
    await g.avfilter_graph_free_js(E),
    await g.ff_free_encoder(T, V, b),
    await g.ff_free_muxer(I, ce),
    await te.close(l.output_filename),
    await g.unlink(l.output_filename),
    {
      internal_filename: l.output_filename,
      aborted_no_partial: !1,
      internal_bloburl: await C(e, l.output_filename),
      download_id: e.download_id,
      ending_reason: q.isOk() ? "end_of_file" : q.error,
    }
  );
}
async function kt(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-f",
    "hls",
    "-i",
    `jsfetch:${e.url}`,
    "-c:a",
    "libmp3lame",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function Ct(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-f",
    "hls",
    "-i",
    `jsfetch:${e.url}`,
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function Nt(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-f",
    "hls",
    "-i",
    `jsfetch:${e.url}`,
    "-i",
    `jsfetch:${e.url_audio}`,
    "-c",
    "copy",
    "-map",
    "0:v:0",
    "-map",
    "1:a:0?",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
function Lt(e) {
  if (!e.headers.get("content-length")) return F;
  let t = e.headers.get("content-length"),
    r = parseInt(t);
  return r <= 0 ? F : k(r);
}
function Ut(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  return L(e, t, r, [
    "-analyzeduration",
    "1M",
    "-ss",
    "0",
    "-i",
    `jsfetch:${e.url}`,
    "-t",
    "5",
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function Xt(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-i",
    `jsfetch:${e.url}`,
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function Bt(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  return await L(e, t, r, [
    "-analyzeduration",
    "10M",
    "-i",
    `jsfetch:${e.url}`,
    "-i",
    `jsfetch:${e.url_audio}`,
    "-c",
    "copy",
    "-map",
    "0:v:0",
    "-map",
    "1:a:0?",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    r,
  ]);
}
async function Gt(e, t) {
  let r = `${e.download_id}.${e.muxer}`;
  try {
    return await L(e, t, r, [
      "-analyzeduration",
      "10M",
      "-i",
      `jsfetch:${e.url}`,
      "-map",
      "0:a:0",
      "-af",
      "aresample",
      "-c:a",
      "libmp3lame",
      "-avoid_negative_ts",
      "make_zero",
      "-y",
      r,
    ]);
  } catch (a) {
    return {
      aborted_no_partial: !0,
      download_id: e.download_id,
      ending_reason: {
        user_abort: !1,
        percentage_incomplete: !1,
        e4XX_5XX_failure: !1,
        other_failure: !0,
        message: `Failed to download audio http media ${a}`,
      },
    };
  }
}
async function Ee(e, t, r, a, i, { headers: o, download_id: n, cache: l }) {
  let d = await Z(a, { headers: o, signal: i, cache: l });
  if (d.isErr()) return { aborted_no_partial: !0, download_id: n, ending_reason: d.error };
  let _ = d.value.body.getReader(),
    u = Lt(d.value),
    p;
  u.isSome() && (p = u.value);
  let c = 0;
  for (;;) {
    let y = await ie(_);
    if (y.isErr()) return { aborted_no_partial: !0, download_id: n, ending_reason: y.error };
    let { done: A, value: s } = y.value;
    if (A) break;
    (e.onwrite(t, c, s),
      (c += s.length),
      p
        ? r.set_progress({
            percent: { is_known: !0, value: 100 * (c / p) },
            fetched_bytes_count: c,
            status: "downloading",
            output_duration_s: 0,
          })
        : r.set_progress({
            percent: { is_known: !1 },
            fetched_bytes_count: c,
            status: "downloading",
            output_duration_s: 0,
          }));
  }
  return {
    aborted_no_partial: !1,
    download_id: n,
    ending_reason: "end_of_file",
    internal_filename: t,
    internal_bloburl: void 0,
  };
}
async function Yt(e, t) {
  let r = `${e.download_id}.${e.extension}`,
    a = new X();
  await a.open(r);
  let i = new Y(e.download_id),
    o = await Ee(a, r, i, e.url, t, e);
  return (
    await a.close(r),
    o.aborted_no_partial ? a.remove(r) : (o.internal_bloburl = await C(e, r)),
    o
  );
}
var $t = 1048576 * 10;
async function Qe(e, t, r, a, i, { headers: o, download_id: n, cache: l }, d) {
  let _ = d,
    u = 0,
    p = 0;
  for (; !(u >= _); ) {
    let c = Math.min(u + $t, _),
      y = `${a.href}&range=${u}-${c}`;
    u = c + 1;
    let A = await Z(y, { headers: o, signal: i, cache: l });
    if (A.isErr()) return { aborted_no_partial: !0, download_id: n, ending_reason: A.error };
    let s = A.value.body.getReader();
    for (;;) {
      let w = await ie(s);
      if (w.isErr()) return { aborted_no_partial: !0, download_id: n, ending_reason: w.error };
      let { done: E, value: m } = w.value;
      if (E) break;
      (e.onwrite(t, p, m),
        (p += m.length),
        r.set_progress({
          percent: { is_known: !0, value: 100 * (p / _) },
          fetched_bytes_count: p,
          status: "downloading",
          output_duration_s: 0,
        }));
    }
  }
  return {
    aborted_no_partial: !1,
    download_id: n,
    ending_reason: "end_of_file",
    internal_filename: t,
    internal_bloburl: void 0,
  };
}
async function Ze(e, t) {
  let r = new Y(e.download_id),
    a = `${e.good_basename}.${e.extension}`,
    i = new X();
  await i.open(a);
  let o;
  return (
    e.content_length.isSome()
      ? (o = await Qe(i, a, r, e.url, t, e, e.content_length.value))
      : (o = await Ee(i, a, r, e.url, t, e)),
    await i.close(a),
    o.aborted_no_partial ? i.remove(a) : (o.internal_bloburl = await C(e, a)),
    o
  );
}
async function Ht(e, t) {
  let r = new ve(e.download_id),
    a = new X(),
    i;
  {
    ((i = `${e.download_id}_audio`), await a.open(i));
    let s;
    if (
      (e.audio_content_length.isSome()
        ? (s = await Qe(a, i, r, e.url_audio, t, e, e.audio_content_length.value))
        : (s = await Ee(a, i, r, e.url_audio, t, e)),
      await a.close(i),
      s.aborted_no_partial)
    )
      return (a.remove(i), s);
  }
  r.nextStream();
  let o;
  {
    ((o = `${e.download_id}_video`), await a.open(o));
    let s;
    if (
      (e.content_length.isSome()
        ? (s = await Qe(a, o, r, e.url, t, e, e.content_length.value))
        : (s = await Ee(a, o, r, e.url, t, e)),
      await a.close(o),
      s.aborted_no_partial)
    )
      return (a.remove(o), s);
  }
  let n = await navigator.storage.getDirectory(),
    l = await n.getFileHandle(i),
    d = await n.getFileHandle(o),
    _ = await l.getFile(),
    u = await d.getFile(),
    p = URL.createObjectURL(_),
    c = URL.createObjectURL(u),
    y = `${e.download_id}.${e.extension}`,
    A = await se.LibAV({ noworker: !0 });
  ((A.onwrite = a.onwrite.bind(a)), await A.mkwriterdev(y), await a.open(y));
  try {
    let s = await A.ffmpeg("-i", `jsfetch:${p}`, "-i", `jsfetch:${c}`, "-c", "copy", "-y", y);
    return (
      await a.close(y),
      URL.revokeObjectURL(p),
      URL.revokeObjectURL(c),
      await n.removeEntry(i),
      await n.removeEntry(o),
      s == 0
        ? {
            aborted_no_partial: !1,
            internal_filename: y,
            internal_bloburl: await C(e, y),
            download_id: e.download_id,
            ending_reason: "end_of_file",
          }
        : { aborted_no_partial: !0, download_id: e.download_id, ending_reason: P("muxing failed") }
    );
  } catch (s) {
    try {
      (a.remove(y),
        URL.revokeObjectURL(p),
        URL.revokeObjectURL(c),
        n.removeEntry(i),
        n.removeEntry(o));
    } catch {}
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: P(s.toString()) };
  }
}
async function Wt(e, t) {
  let r = new X(),
    a = `${e.download_id}.${e.extension}`,
    i = `${e.url.href}&range=0-${$t}`,
    o = 0;
  await r.open(a);
  let n = await Z(i, { headers: e.headers, signal: t, cache: e.cache });
  if (n.isErr())
    return { aborted_no_partial: !0, download_id: e.download_id, ending_reason: n.error };
  let l = n.value.body.getReader();
  try {
    for (;;) {
      let d = await ie(l);
      if (d.isErr())
        return (
          r.close(a),
          r.remove(a),
          { aborted_no_partial: !0, download_id: e.download_id, ending_reason: d.error }
        );
      let { done: _, value: u } = d.value;
      if (_) break;
      (r.onwrite(a, o, u), (o += u.length));
    }
    return (
      r.close(a),
      {
        aborted_no_partial: !1,
        internal_filename: a,
        internal_bloburl: void 0,
        download_id: e.download_id,
        ending_reason: "end_of_file",
      }
    );
  } catch (d) {
    throw (r.close(a), r.remove(a), d);
  }
}
async function zt(e, t) {
  return await Ze(e, t);
}
async function Xr(e, t) {
  try {
    let r;
    if (e.strategy == "m3u8_audio_only") r = e.will_use_jsfetch ? await kt(e, t) : await Ot(e, t);
    else if (e.strategy == "m3u8_audio_video_one_source")
      r = e.will_use_jsfetch ? await Ct(e, t) : await Ft(e, t);
    else if (e.strategy == "m3u8_audio_video_two_sources")
      r = e.will_use_jsfetch ? await Nt(e, t) : await Mt(e, t);
    else if (e.strategy == "m3u8_video_preview") r = await xt(e, t);
    else if (e.strategy == "youtube_audio_only") r = await zt(e, t);
    else if (e.strategy == "youtube_audio_video_one_source") r = await Ze(e, t);
    else if (e.strategy == "youtube_audio_video_two_sources") r = await Ht(e, t);
    else if (e.strategy == "youtube_video_preview") r = await Wt(e, t);
    else if (e.strategy == "http_audio_video_one_source") r = await Yt(e, t);
    else if (e.strategy == "http_audio_video_two_sources_jsfetch") r = await Bt(e, t);
    else if (e.strategy == "http_audio_video_one_source_jsfetch") r = await Xt(e, t);
    else if (e.strategy == "http_strip_audio_jsfetch") r = await Gt(e, t);
    else if (e.strategy == "http_video_preview_jsfetch") r = await Ut(e, t);
    else if (e.strategy == "mpd_audio_only") r = await ft(e, t);
    else if (e.strategy == "mpd_audio_video_one_source") r = await ct(e, t);
    else if (e.strategy == "mpd_video_preview") r = await mt(e, t);
    else throw new Error("Unreachable");
    z({ name: "download_result", data: r });
  } catch (r) {
    let a = it(r);
    throw (z({ name: "download_error", data: { download_id: e.download_id, error: a } }), r);
  }
}
function Br() {
  ot();
  let e = new Map();
  (st(async (t) => {
    if (t.name == "abort_download") {
      let r = e.get(t.data.download_id);
      r && r.abort();
    } else if (t.name == "download") {
      let r = H(t.data.download_args),
        a = new AbortController();
      (e.set(r.download_id, a),
        await Xr(r, a.signal),
        e.delete(r.download_id),
        a.abort(),
        z({
          name: "download_progress",
          data: { download_id: r.download_id, progress: { status: "finalizing" } },
        }));
    } else
      t.name == "revoke_blob_url"
        ? URL.revokeObjectURL(t.data.blob_url)
        : t.name == "is_ready" && z({ name: "is_ready_success", data: null });
  }),
    z({ name: "is_ready_success", data: null }));
}
Br();
export { Xr as Download };
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)
*/
