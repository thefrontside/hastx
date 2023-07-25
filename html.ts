//deno-lint-ignore-file no-empty-interface

import type * as hast from "./deps.ts";

export type HTMLChild =
  | string
  | number
  | boolean
  | hast.Element
  | hast.Root
  | hast.Text;

export type HTMLChildren = HTMLChild | Iterable<HTMLChild>;

export interface HTMLVoidElement extends HTMLElement {
  children?: never;
}

export interface HTMLElement extends HTMLAttributes {
  children?: HTMLChildren;
}

export interface HTMLAttributes {
  accesskey?: string;
  autocapitalize?: "off" | "none" | "on" | "setences" | "words" | "characters";
  class?: string;
  contenteditable?: "true" | "false" | "plaintext-only";
  dir?: "ltr" | "rtl" | "auto";
  draggable?: "true" | "false";
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  hidden?: "hidden" | "until-found";
  id?: string;
  inert?: boolean;
  inputmode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  is?: string;
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: string;
  itemtype?: string;
  lang?: string;
  nonce?: string;
  spellcheck?: "true" | "false" | "default";
  style?: string;
  tabindex?: number;
  title?: string;
  translate?: "yes" | "no";
}

export interface HTMLHTML extends HTMLElement {
  /**
   * Specifies the XML Namespace of the document. Default value is
   * "http://www.w3.org/1999/xhtml". This is required in documents parsed with
   * XML parsers, and optional in text/html documents.
   */
  xmlns?: string;
}

export interface HTMLArea extends HTMLVoidElement {
  /**
   * A text string alternative to display on browsers that do not
   * display images. The text should be phrased so that it presents
   * the user with the same kind of choice as the image would offer
   * when displayed without the alternative text. This attribute is
   * required only if the href attribute is used.
   */
  alt?: string;

  /**
   * The coords attribute details the coordinates of the shape
   * attribute in size, shape, and placement of an <area>. This
   * attribute must not be used if shape is set to default.
   */
  coords?: string;

  /**
   * This attribute, if present, indicates that the author intends the
   * hyperlink to be used for downloading a resource. See <a> for a
   * full description of the download attribute.
   */
  download?: string;

  /**
   * The hyperlink target for the area. Its value is a valid URL. This
   * attribute may be omitted; if so, the <area> element does not
   * represent a hyperlink.
   */
  href?: string;

  /**
   * Contains a space-separated list of URLs to which, when the
   * hyperlink is followed, POST requests with the body PING will be
   * sent by the browser (in the background). Typically used for
   * tracking.
   */
  ping?: string;

  /**
   * A string indicating which referrer to use when fetching the
   * resource:
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

  /**
   * For anchors containing the href attribute, this attribute
   * specifies the relationship of the target object to the link
   * object. The value is a space-separated list of link types. The
   * values and their semantics will be registered by some authority
   * that might have meaning to the document author. The default
   * relationship, if no other is given, is void. Use this attribute
   * only if the href attribute is present.
   */
  rel?: string;

  /**
   * The shape of the associated hot spot. The specifications for HTML
   * defines the values rect, which defines a rectangular region;
   * circle, which defines a circular region; poly, which defines a
   * polygon; and default, which indicates the entire region beyond
   * any defined shapes.
   */
  shape?: "rect" | "circle" | "poly" | "default";

  /**
   * A keyword or author-defined name of the browsing context to
   * display the linked resource.
   */
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
}

export interface HTMLBase extends HTMLVoidElement {
  /**
   * The base URL to be used throughout the document for relative URLs. Absolute
   * and relative URLs are allowed.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
   */
  href?: string;

  /**
   * A keyword or author-defined name of the default browsing context
   * to show the results of navigation from <a>, <area>, or <form>
   * elements without explicit target attributes. The following
   * keywords have special meanings
   */
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
}

export interface HTMLHead extends HTMLElement {}

export interface HTMLLink extends HTMLVoidElement {
  /**
   * This attribute is only used when rel="preload" or rel="prefetch"
   * has been set on the <link> element. It specifies the type of
   * content being loaded by the <link>, which is necessary for
   * request matching, application of correct content security policy,
   * and setting of correct Accept request header. Furthermore,
   * rel="preload" uses this as a signal for request
   * prioritization. The table below lists the valid values for this
   * attribute and the elements or resources they apply to.
   */
  as?:
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "script"
    | "style"
    | "track"
    | "video"
    | "worker";

  /**
   * This enumerated attribute indicates whether CORS must be used when fetching
   * the resource. CORS-enabled images can be reused in the <canvas> element
   * without being tainted.
   */
  crossorigin?: "anonymous" | "use-credentials";

  /**
   * Provides a hint of the relative priority to use when fetching a preloaded
   * resource.
   */
  fetchpriority?: "high" | "low" | "auto";

  /**
   * This attribute specifies the URL of the linked resource. A URL can be
   * absolute or relative.
   */
  href?: string;

  /**
   * This attribute indicates the language of the linked resource. It
   * is purely advisory. Allowed values are specified by RFC 5646:
   * Tags for Identifying Languages (also known as BCP 47). Use this
   * attribute only if the href attribute is present.
   */
  hreflang?: string;

  /**
   *  For rel="preload" and as="image" only, the imagesizes attribute
   *  is a sizes attribute that indicates to preload the appropriate
   *  resource used by an img element with corresponding values for its
   *  srcset and sizes attributes.
   */
  imagesizes?: string;

  /**
   * For rel="preload" and as="image" only, the imagesrcset attribute
   * is a sourceset attribute that indicates to preload the
   * appropriate resource used by an img element with corresponding
   * values for its srcset and sizes attributes.
   */
  imagesrcset?: string;

  /**
   * Contains inline metadata — a base64-encoded cryptographic hash of
   * the resource (file) you're telling the browser to fetch. The
   * browser can use this to verify that the fetched resource has been
   * delivered free of unexpected manipulation. See Subresource
   * Integrity.
   */
  integrity?: string;

  /**
   * This attribute specifies the media that the linked resource
   * applies to. Its value must be a media type / media query. This
   * attribute is mainly useful when linking to external stylesheets —
   * it allows the user agent to pick the best adapted one for the
   * device it runs on.
   */
  media?: string;

  /**
   * Identifies a resource that might be required by the next
   * navigation and that the user agent should retrieve it. This allows
   * the user agent to respond faster when the resource is requested in
   * the future.
   */
  prefetch?: boolean;

  /**
   * A string indicating which referrer to use when fetching the resource:
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "unsafe-url";

  /**
   * This attribute names a relationship of the linked document to the
   * current document. The attribute must be a space-separated list of
   * link type values.
   */
  rel?: string;

  /**
   * This attribute defines the sizes of the icons for visual media
   * contained in the resource. It must be present only if the rel
   * contains a value of icon or a non-standard type such as Apple's
   * apple-touch-icon. It may have the following values:
   */
  sizes?: string;

  /**
   * The title attribute has special semantics on the <link>
   * element. When used on a <link rel="stylesheet"> it defines a
   * default or an alternate stylesheet.
   */
  title?: string;

  /**
   * This attribute is used to define the type of the content linked
   * to. The value of the attribute should be a MIME type such as
   * text/html, text/css, and so on. The common use of this attribute
   * is to define the type of stylesheet being referenced (such as
   * text/css), but given that CSS is the only stylesheet language
   * used on the web, not only is it possible to omit the type
   * attribute, but is actually now recommended practice. It is also
   * used on rel="preload" link types, to make sure the browser only
   * downloads file types that it supports.
   */
  type?: string;

  /**
   * This attribute explicitly indicates that certain operations
   * should be blocked on the fetching of an external resource. The
   * operations that are to be blocked must be a space-separated list
   * of blocking attributes listed below.
   */
  blocking?: string;
}

export interface HTMLMeta extends HTMLVoidElement {
  /**
   * This attribute declares the document's character encoding. If the
   * attribute is present, its value must be an ASCII case-insensitive
   * match for the string "utf-8", because UTF-8 is the only valid
   * encoding for HTML5 documents. <meta> elements which declare a
   * character encoding must be located entirely within the first 1024
   * bytes of the document.
   */
  charset?: "utf-8" | "UTF-8";

  /**
   * This attribute contains the value for the http-equiv or name attribute,
   * depending on which is used.
   */
  content?: string;

  /**
   * Defines a pragma directive. The attribute is named
   * http-equiv(alent) because all the allowed values are names of
   * particular HTTP headers:
   */
  "http-equiv"?:
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh";

  /**
   * The name and content attributes can be used together to provide
   * document metadata in terms of name-value pairs, with the name
   * attribute giving the metadata name, and the content attribute
   * giving the value.
   */
  name?: string;

  /**
   * The name and content attributes can be used together to provide
   * document metadata in terms of name-value pairs, with the name
   * attribute giving the metadata name, and the content attribute
   * giving the value.
   */
  property?: string;
}

export interface HTMLStyle extends HTMLElement {
  /**
   * This attribute defines which media the style should be applied
   * to. Its value is a media query, which defaults to all if the
   * attribute is missing.
   */
  media?: string;

  /**
   * A cryptographic nonce (number used once) used to allow inline
   * styles in a style-src Content-Security-Policy. The server must
   * generate a unique nonce value each time it transmits a policy. It
   * is critical to provide a nonce that cannot be guessed as
   * bypassing a resource's policy is otherwise trivial.
   */
  nonce?: string;

  /**
   * This attribute specifies alternative style sheet sets.
   */
  title?: string;

  /**
   * This attribute explicitly indicates that certain operations
   * should be blocked on the fetching of critical
   * subresources. @import-ed stylesheets are generally considered as
   * critical subresources, whereas background-image and fonts are
   * not.
   */
  blocking?: "render";
}

export interface HTMLTitle extends HTMLElement {}

export interface HTMLBody extends HTMLElement {}

export interface HTMLBlockquote extends HTMLElement {
  /**
   * A URL that designates a source document or message for the
   * information quoted. This attribute is intended to point to
   * information explaining the context or the reference for the
   * quote.
   */
  cite?: string;
}

export interface HTMListItem extends HTMLElement {
  /**
   * This integer attribute indicates the current ordinal value of the
   * list item as defined by the <ol> element. The only allowed value
   * for this attribute is a number, even if the list is displayed
   * with Roman numerals or letters. List items that follow this one
   * continue numbering from the value set. The value attribute has no
   * meaning for unordered lists (<ul>) or for menus (<menu>).
   */
  value?: number;
}

export interface HTMLOrderedList extends HTMLElement {
  /**
   * This Boolean attribute specifies that the list's items are in
   * reverse order. Items will be numbered from high to low.
   */
  reversed?: boolean;

  /**
   * An integer to start counting from for the list items. Always an
   * Arabic numeral (1, 2, 3, etc.), even when the numbering type is
   * letters or Roman numerals. For example, to start numbering
   * elements from the letter "d" or the Roman numeral "iv," use
   * start="4".
   */
  start?: number;

  /**
   * Sets the numbering type:
   *
   *  a for lowercase letters
   *  A for uppercase letters
   *  i for lowercase Roman numerals
   *  I for uppercase Roman numerals
   *  1 for numbers (default)
   *
   * The specified type is used for the entire list unless a different
   * type attribute is used on an enclosed <li> element.
   */
  type?: "a" | "A" | "i" | "I" | "1";
}

export interface HTMLAnchor extends HTMLElement {
  /**
   * Causes the browser to treat the linked URL as a download. Can be
   * used with or without a filename value:
   */
  download?: string;

  /**
   * The URL that the hyperlink points to. Links are not restricted to
   * HTTP-based URLs — they can use any URL scheme supported by
   * browsers:
   */
  href?: string;

  /**
   * Hints at the human language of the linked URL. No built-in
   * functionality. Allowed values are the same as the global lang
   * attribute.
   */
  hreflang?: string;

  /**
   * A space-separated list of URLs. When the link is followed, the
   * browser will send POST requests with the body PING to the
   * URLs. Typically for tracking.
   */
  ping?: string;

  /**
   * How much of the referrer to send when following the link.
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: string;

  /**
   * Where to display the linked URL, as the name for a browsing
   * context (a tab, window, or <iframe>). The following keywords have
   * special meanings for where to load the URL:
   */
  target?: "_self" | "_blank" | "_parent" | "_top" | string;

  /**
   * Hints at the linked URL's format with a MIME type. No built-in
   * functionality.
   */
  type?: string;
}

export interface HTMLTime extends HTMLElement {
  /**
   * This attribute indicates the time and/or date of the element
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values
   */
  datetime?: string;
}

export interface HTMLBDO extends HTMLElement {
  /**
   * The direction in which text should be rendered in this element's
   * contents.
   */
  dir: "rtl" | "ltr";
}

export interface HTMLData extends HTMLElement {
  /**
   * This attribute specifies the machine-readable translation of the
   * content of the element.
   */
  value: string;
}

export interface HTMLAudio extends HTMLElement {
  /**
   * A Boolean attribute: if specified, the audio will automatically
   * begin playback as soon as it can do so, without waiting for the
   * entire audio file to finish downloading.
   */
  autoplay?: boolean;

  /**
   * If this attribute is present, the browser will offer controls to
   * allow the user to control audio playback, including volume,
   * seeking, and pause/resume playback.
   */
  controls?: boolean;

  /**
   * The controlslist attribute, when specified, helps the browser
   * select what controls to show for the audio element whenever the
   * browser shows its own set of controls (that is, when the controls
   * attribute is specified).
   */
  controlslist?: string;

  /**
   * This enumerated attribute indicates whether to use CORS to fetch
   * the related audio file. CORS-enabled resources can be reused in
   * the <canvas> element without being tainted.
   */
  crossorigin?: "anonymous" | "use-credentials";

  /**
   * A Boolean attribute used to disable the capability of remote
   * playback in devices that are attached using wired (HDMI, DVI,
   * etc.) and wireless technologies (Miracast, Chromecast, DLNA,
   * AirPlay, etc.). See this proposed specification for more
   * information.
   */
  disableremotplayback?: boolean;

  /**
   * A Boolean attribute: if specified, the audio player will
   * automatically seek back to the start upon reaching the end of the
   * audio.
   */
  loop?: boolean;

  /**
   * A Boolean attribute that indicates whether the audio will be
   * initially silenced. Its default value is false.
   */
  muted?: boolean;

  /**
   * This enumerated attribute is intended to provide a hint to the
   * browser about what the author thinks will lead to the best user
   * experience. It may have one of the following values:
   */
  preload?: "none" | "metadata" | "auto";

  /**
   * The URL of the audio to embed. This is subject to HTTP access
   * controls. This is optional; you may instead use the <source>
   * element within the audio block to specify the audio to embed.
   */
  src?: string;
}

export interface HTMLImage extends HTMLVoidElement {
  /**
   * Defines an alternative text description of the image.
   */
  alt?: string;

  /**
   * Indicates if the fetching of the image must be done using a CORS
   * request. Image data from a CORS-enabled image returned from a
   * CORS request can be reused in the <canvas> element without being
   * marked "tainted".
   *
   * If the crossorigin attribute is not specified, then a non-CORS
   * request is sent (without the Origin request header), and the
   * browser marks the image as tainted and restricts access to its
   * image data, preventing its usage in <canvas> elements.
   *
   * If the crossorigin attribute is specified, then a CORS request is
   * sent (with the Origin request header); but if the server does not
   * opt into allowing cross-origin access to the image data by the
   * origin site (by not sending any Access-Control-Allow-Origin
   * response header, or by not including the site's origin in any
   * Access-Control-Allow-Origin response header it does send), then the
   * browser blocks the image from loading, and logs a CORS error to the
   * devtools console.
   */
  crossorigin?: "anonymous" | "use-credentials";

  /**
   * Provides an image decoding hint to the browser. Allowed values:
   */
  decoding?: "sync" | "async" | "auto";

  /**
   * Marks the image for observation by the PerformanceElementTiming
   * API. The value given becomes an identifier for the observed image
   * element. See also the elementtiming attribute page.
   */
  elementiming?: boolean;

  /**
   * Provides a hint of the relative priority to use when fetching the
   * image
   */
  fetchpriority?: "high" | "low" | "auto";

  /**
   * The intrinsic height of the image, in pixels. Must be an integer
   * without a unit.
   */
  height?: number;

  /**
   * This Boolean attribute indicates that the image is part of a
   * server-side map. If so, the coordinates where the user clicked on
   * the image are sent to the server.
   */
  ismap?: boolean;

  /**
   * Indicates how the browser should load the image
   */
  loading?: "eager" | "lazy";

  /**
   * A string indicating which referrer to use when fetching the
   * resource:
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

  /**
   * One or more strings separated by commas, indicating a set of source sizes.
   * Each source size consists of:
   *
   *   1. A media condition. This must be omitted for the last item in the list.
   *   2. A source size value.
   *
   * Media Conditions describe properties of the viewport, not of the
   * image. For example, (max-height: 500px) 1000px proposes to use a
   * source of 1000px width, if the viewport is not higher than 500px.
   *
   * Source size values specify the intended display size of the
   * image. User agents use the current source size to select one of the
   * sources supplied by the srcset attribute, when those sources are
   * described using width (w) descriptors. The selected source size
   * affects the intrinsic size of the image (the image's display size
   * if no CSS styling is applied). If the srcset attribute is absent,
   * or contains no values with a width descriptor, then the sizes
   * attribute has no effect.
   */
  sizes?: string;

  /**
   * The image URL. Mandatory for the <img> element. On browsers
   * supporting srcset, src is treated like a candidate image with a
   * pixel density descriptor 1x, unless an image with this pixel
   * density descriptor is already defined in srcset, or unless srcset
   * contains w descriptors.
   */
  src: string;

  /**
   * One or more strings separated by commas, indicating possible
   * image sources for the user agent to use. Each string is composed
   * of:
   *
   *   1. A URL to an image
   *   2. Optionally, whitespace followed by one of:
   *      - A width descriptor (a positive integer directly followed by
   *          w). The width descriptor is divided by the source size
   *          given in the sizes attribute to calculate the effective
   *          pixel density.
   *      - A pixel density descriptor (a positive floating point number
   *          directly followed by x).
   * If no descriptor is specified, the source is assigned the default descriptor of 1x.
   *
   * It is incorrect to mix width descriptors and pixel density
   * descriptors in the same srcset attribute. Duplicate descriptors
   * (for instance, two sources in the same srcset which are both
   * described with 2x) are also invalid.

   * If the srcset attribute uses width descriptors, the sizes
   * attribute must also be present, or the srcset itself will be
   * ignored.
   *
   * The user agent selects any of the available sources at its
   * discretion. This provides them with significant leeway to tailor their
   * selection based on things like user preferences or bandwidth
   * conditions. See our Responsive images tutorial for an example.
   */
  srcset?: string;

  /**
   * The intrinsic width of the image in pixels. Must be an integer
   * without a unit.
   */
  width?: number;

  /**
   * The partial URL (starting with #) of an image map associated with
   * the element.
   */
  usemap?: boolean;
}

export interface HTMLMap extends HTMLElement {
  /**
   * The name attribute gives the map a name so that it can be
   * referenced. The attribute must be present and must have a
   * non-empty value with no space characters. The value of the name
   * attribute must not be equal to the value of the name attribute of
   * another <map> element in the same document. If the id attribute
   * is also specified, both attributes must have the same value.
   */
  name: string;
}

export interface HTMLTrack extends HTMLVoidElement {
  /**
   * This attribute indicates that the track should be enabled unless
   * the user's preferences indicate that another track is more
   * appropriate. This may only be used on one track element per media
   * element.
   */
  default?: boolean;

  /**
   * How the text track is meant to be used. If omitted the default
   * kind is subtitles. If the attribute contains an invalid value, it
   * will use metadata (Versions of Chrome earlier than 52 treated an
   * invalid value as subtitles). The following keywords are allowed:
   */
  kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";

  /**
   * A user-readable title of the text track which is used by the
   * browser when listing available text tracks.
   */
  label?: string;

  /**
   * Address of the track (.vtt file). Must be a valid URL. This
   * attribute must be specified and its URL value must have the same
   * origin as the document — unless the <audio> or <video> parent
   * element of the track element has a crossorigin attribute.
   */
  src: string;

  /**
   * Language of the track text data. It must be a valid BCP 47
   * language tag. If the kind attribute is set to subtitles, then
   * srclang must be defined
   */
  srclang?: string;
}

export interface HTMLVideo extends HTMLElement {
  /**
   * A Boolean attribute; if specified, the video automatically begins
   * to play back as soon as it can do so without stopping to finish
   * loading the data.
   */
  autoplay?: boolean;

  /**
   * If this attribute is present, the browser will offer controls to
   * allow the user to control video playback, including volume,
   * seeking, and pause/resume playback.
   */
  controls?: boolean;

  /**
   * The controlslist attribute, when specified, helps the browser
   * select what controls to show for the video element whenever the
   * browser shows its own set of controls (that is, when the controls
   * attribute is specified).
   */
  controlslist?: string;

  /**
   * This enumerated attribute indicates whether to use CORS to fetch
   * the related video. CORS-enabled resources can be reused in the
   * <canvas> element without being tainted.
   */
  crossorigin?: "anonymous" | "use-credentials";

  /**
   * Prevents the browser from suggesting a Picture-in-Picture context
   * menu or to request Picture-in-Picture automatically in some
   * cases.
   */
  disablepictureinpicture?: boolean;

  /**
   * A Boolean attribute used to disable the capability of remote
   * playback in devices that are attached using wired (HDMI, DVI,
   * etc.) and wireless technologies (Miracast, Chromecast, DLNA,
   * AirPlay, etc.).
   */
  disableremoteplayback?: boolean;

  /**
   * The height of the video's display area, in CSS pixels (absolute
   * values only; no percentages).
   */
  height: number;

  /**
   * A Boolean attribute; if specified, the browser will automatically
   * seek back to the start upon reaching the end of the video.
   */
  loop?: boolean;

  /**
   * A Boolean attribute that indicates the default setting of the
   * audio contained in the video. If set, the audio will be initially
   * silenced. Its default value is false, meaning that the audio will
   * be played when the video is played.
   */
  muted?: boolean;

  /**
   * A Boolean attribute indicating that the video is to be played
   * "inline", that is within the element's playback area. Note that
   * the absence of this attribute does not imply that the video will
   * always be played in fullscreen.
   */
  playsinline?: boolean;

  /**
   * A URL for an image to be shown while the video is downloading. If
   * this attribute isn't specified, nothing is displayed until the
   * first frame is available, then the first frame is shown as the
   * poster frame.
   */
  poster?: string;

  /**
   * This enumerated attribute is intended to provide a hint to the
   * browser about what the author thinks will lead to the best user
   * experience regarding what content is loaded before the video is
   * played.
   */
  preload?: "none" | "metadata" | "auto";

  /**
   * The URL of the video to embed. This is optional; you may instead
   * use the <source> element within the video block to specify the
   * video to embed.
   */
  src?: string;

  /**
   * The width of the video's display area, in CSS pixels (absolute
   * values only; no percentages).
   */
  width: number;
}

export interface HTMLEmbed extends HTMLVoidElement {
  /**
   * The displayed height of the resource, in CSS pixels. This must be
   * an absolute value; percentages are not allowed.
   */
  height?: number;

  /**
   * The URL of the resource being embedded.
   */
  src: string;

  /**
   * The MIME type to use to select the plug-in to instantiate.
   */
  type: string;

  /**
   * The displayed width of the resource, in CSS pixels. This must be
   * an absolute value; percentages are not allowed.
   */
  width?: number;
}

export interface HTMLIFrame extends HTMLVoidElement {
  /**
   * Specifies a Permissions Policy for the <iframe>. The policy
   * defines what features are available to the <iframe> (for example,
   * access to the microphone, camera, battery, web-share, etc.) based
   * on the origin of the request.
   */
  allow?: string;

  /**
   * Set to true if the <iframe> can activate fullscreen mode by
   * calling the requestFullscreen() method.
   */
  allowfullscreen?: boolean;

  /**
   * Set to true if a cross-origin <iframe> should be allowed to
   * invoke the Payment Request API.
   */
  allowpaymentrequest?: boolean;

  /**
   * Set to true to make the <iframe> credentialless, meaning that its
   * content will be loaded in a new, ephemeral context. It doesn't
   * have access to the network, cookies, and storage data associated
   * with its origin. It uses a new context local to the top-level
   * document lifetime. In return, the Cross-Origin-Embedder-Policy
   * (COEP) embedding rules can be lifted, so documents with COEP set
   * can embed third-party documents that do not. See IFrame
   * credentialless for more details.
   */
  credentialless?: boolean;

  /**
   * A Content Security Policy enforced for the embedded resource. See
   * HTMLIFrameElement.csp for details.
   */
  csp?: string;

  /**
   * The height of the frame in CSS pixels. Default is 150.
   */
  height?: number;

  /**
   * Indicates how the browser should load the iframe
   */
  loading?: "eager" | "lazy";

  /**
   * A targetable name for the embedded browsing context. This can be
   * used in the target attribute of the <a>, <form>, or <base>
   * elements; the formtarget attribute of the <input> or <button>
   * elements; or the windowName parameter in the window.open()
   * method.
   */
  name?: string;

  /**
   * Indicates which referrer to send when fetching the frame's
   * resource
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "scrict-origin-when-cross-origin"
    | "unsafe-url";

  /**
   * Controls the restrictions applied to the content embedded in the
   * <iframe>. The value of the attribute can either be empty to apply
   * all restrictions, or space-separated tokens to lift particular
   * restrictions
   */
  sandbox?: string;

  /**
   * The URL of the page to embed. Use a value of about:blank to embed
   * an empty page that conforms to the same-origin policy. Also note
   * that programmatically removing an <iframe>'s src attribute
   * (e.g. via Element.removeAttribute()) causes about:blank to be
   * loaded in the frame in Firefox (from version 65), Chromium-based
   * browsers, and Safari/iOS.
   */
  src?: string;

  /**
   * Inline HTML to embed, overriding the src attribute. If a browser
   * does not support the srcdoc attribute, it will fall back to the
   * URL in the src attribute.
   */
  srcdoc?: string;

  /**
   * The width of the frame in CSS pixels. Default is 300.
   */
  width?: number;
}

export interface HTMLObject extends HTMLVoidElement {
  /**
   * The address of the resource as a valid URL. At least one of data
   * and type must be defined.
   */
  data?: string;

  /**
   * The form element, if any, that the object element is associated
   * with (its form owner). The value of the attribute must be an ID
   * of a <form> element in the same document.
   */
  form?: string;

  /**
   * The height of the displayed resource, in CSS pixels. — (Absolute
   * values only. NO percentages)
   */
  height?: number;

  /**
   * The name of valid browsing context (HTML5), or the name of the
   * control (HTML 4).
   */
  name?: string;

  /**
   * The content type of the resource specified by data. At least one
   * of data and type must be defined.
   */
  type?: string;

  /**
   * A hash-name reference to a <map> element; that is a '#' followed
   * by the value of a name of a map element.
   */
  usemap?: string;

  /**
   * The width of the display resource, in CSS pixels. — (Absolute
   * values only. NO percentages)
   */
  width?: number;
}

export interface HTMLPortal extends HTMLVoidElement {
  /**
   * Sets the referrer policy to use when requesting the page at the
   * URL given as the value of the src attribute.
   */
  referrerpolicy?: string;

  /**
   * The URL of the page to embed.
   */
  src: string;
}

export interface HTMLSource extends HTMLVoidElement {
  /**
   * The MIME media type of the image or other media type, optionally
   * with a codecs parameter.
   */
  type?: string;

  /**
   * Required if the source element's parent is an <audio> and <video>
   * element, but not allowed if the source element's parent is a
   * <picture> element.
   *
   * Address of the media resource.
   */
  src?: string;

  /**
   * A list of one or more strings, separated by commas, indicating a
   * set of possible images represented by the source for the browser to
   * use.
   *
   * Required if the source element's parent is a <picture> element,
   * but not allowed if the source element's parent is an <audio> or
   * <video> element.
   */
  srcset?: string;

  /**
   * Allowed if the source element's parent is a <picture> element,
   * but not allowed if the source element's parent is an <audio> or
   * <video> element.
   *
   * A list of source sizes that describes the final rendered width of
   * the image represented by the source. Each source size consists of a
   * comma-separated list of media condition-length pairs. Before laying
   * the page out, the browser uses this information to determine which
   * image is defined in srcset to use. Please note that sizes will have
   * its effect only if width dimension descriptors are provided with
   * srcset instead of pixel ratio values (200w instead of 2x for
   * example).
   */

  /**
   * Media query of the resource's intended media.
   *
   * Allowed if the source element's parent is a <picture> element,
   * but not allowed if the source element's parent is an <audio> or
   * <video> element.
   */
  media?: string;

  /**
   * The intrinsic height of the image, in pixels. Must be an integer
   * without a unit.
   *
   * Allowed if the source element's parent is a <picture> element,
   * but not allowed if the source element's parent is an <audio> or
   * <video> element.
   */
  height?: number;

  /**
   * The intrinsic width of the image, in pixels. Must be an integer
   * without a unit.
   *
   * Allowed if the source element's parent is a <picture> element,
   * but not allowed if the source element's parent is an <audio> or
   * <video> element.
   */
  width?: number;
}

export interface HTMLCanvas extends HTMLElement {
  /**
   * The height of the coordinate space in CSS pixels. Defaults to
   * 150.
   */
  height?: number;

  /**
   * The width of the coordinate space in CSS pixels. Defaults to 300.
   */
  width?: number;
}

export interface HTMLScript extends HTMLElement {
  /**
   * For classic scripts, if the async attribute is present, then the
   * classic script will be fetched in parallel to parsing and
   * evaluated as soon as it is available.
   *
   * For module scripts, if the async attribute is present then the
   * scripts and all their dependencies will be executed in the defer
   * queue, therefore they will get fetched in parallel to parsing and
   * evaluated as soon as they are available.
   *
   * This attribute allows the elimination of parser-blocking JavaScript
   * where the browser would have to load and evaluate scripts before
   * continuing to parse. defer has a similar effect in this case.
   *
   * This is a boolean attribute: the presence of a boolean attribute on
   * an element represents the true value, and the absence of the
   * attribute represents the false value.
   */
  async?: boolean;

  /**
   * Normal script elements pass minimal information to the
   * window.onerror for scripts which do not pass the standard CORS
   * checks. To allow error logging for sites which use a separate
   * domain for static media, use this attribute. See CORS settings
   * attributes for a more descriptive explanation of its valid
   * arguments.
   */
  crossorigin?: string;

  /**
   * This Boolean attribute is set to indicate to a browser that the
   * script is meant to be executed after the document has been
   * parsed, but before firing DOMContentLoaded.
   *
   * Scripts with the defer attribute will prevent the DOMContentLoaded
   * event from firing until the script has loaded and finished
   * evaluating.
   */
  defer?: boolean;

  /**
   * Provides a hint of the relative priority to use when fetching an
   * external script.
   */

  fetchpriority?: "high" | "low" | "auto";

  /**
   * This attribute contains inline metadata that a user agent can use
   * to verify that a fetched resource has been delivered free of
   * unexpected manipulation. See
   */
  integrity?: string;

  /**
   * This Boolean attribute is set to indicate that the script should
   * not be executed in browsers that support ES modules — in effect,
   * this can be used to serve fallback scripts to older browsers that
   * do not support modular JavaScript code.
   */
  nomodule?: boolean;

  /**
   * A cryptographic nonce (number used once) to allow scripts in a
   * script-src Content-Security-Policy. The server must generate a
   * unique nonce value each time it transmits a policy. It is
   * critical to provide a nonce that cannot be guessed as bypassing a
   * resource's policy is otherwise trivial.
   */
  nonce?: string;

  /**
   * Indicates which referrer to send when fetching the script, or
   * resources fetched by the script
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "scrict-origin-when-cross-origin"
    | "unsafe-url";

  /**
   * This attribute specifies the URI of an external script; this can
   * be used as an alternative to embedding a script directly within a
   * document.
   */
  src?: string;

  /**
   * This attribute indicates the type of script represented. The
   * value of this attribute will be one of the following:
   */
  type?: "module" | "importmap" | string;

  /**
   * This attribute explicitly indicates that certain operations
   * should be blocked on the fetching of the script. The operations
   * that are to be blocked must be a space-separated list of blocking
   * attributes listed below.
   */
  blocking?: "render";
}

interface HTMLEdit extends HTMLElement {
  /**
   * A URI for a resource that explains the change (for example,
   * meeting minutes).
   */
  cite?: string;

  /**
   * This attribute indicates the time and date of the change and must
   * be a valid date string with an optional time. If the value cannot
   * be parsed as a date with an optional time string, the element
   * does not have an associated timestamp. For the format of the
   * string without a time, see Date strings. The format of the string
   * if it includes both date and time is covered in Local date and
   * time strings.
   */

  /**
   * This attribute indicates the time and date of the change and must
   * be a valid date string with an optional time. If the value cannot
   * be parsed as a date with an optional time string, the element
   * does not have an associated timestamp. For the format of the
   * string without a time, see Date strings. The format of the string
   * if it includes both date and time is covered in Local date and
   * time strings.
   */
  datetime?: string;
}

export interface HTMLCol extends HTMLVoidElement {
  /**
   * This attribute contains a positive integer indicating the number
   * of consecutive columns the <col> element spans. If not present,
   * its default value is 1.
   */
  span?: number;
}

export interface HTMLTd extends HTMLElement {
  /**
   * This attribute contains a non-negative integer value that
   * indicates for how many columns the cell extends. Its default
   * value is 1. Values higher than 1000 will be considered as
   * incorrect and will be set to the default value (1).
   */
  colspan?: number;

  /**
   * This attribute contains a list of space-separated strings, each
   * corresponding to the id attribute of the <th> elements that apply
   * to this element.
   */
  headers?: string;

  /**
   * This attribute contains a non-negative integer value that
   * indicates for how many rows the cell extends. Its default value
   * is 1; if its value is set to 0, it extends until the end of the
   * table section (<thead>, <tbody>, <tfoot>, even if implicitly
   * defined), that the cell belongs to. Values higher than 65534 are
   * clipped down to 65534.
   */
  rowspan?: number;
}

export interface HTMLTh extends HTMLElement {
  /**
   * This attribute contains a short abbreviated description of the
   * cell's content. Some user-agents, such as speech readers, may
   * present this description before the content itself.
   */
  abbr?: string;

  /**
   * This attribute contains a non-negative integer value that
   * indicates for how many columns the cell extends. Its default
   * value is 1. Values higher than 1000 will be considered as
   * incorrect and will be set to the default value (1).
   */
  colspan?: number;

  /**
   * This attribute contains a list of space-separated strings, each
   * corresponding to the id attribute of the <th> elements that apply
   * to this element.
   */
  headers?: string;

  /**
   * This attribute contains a non-negative integer value that
   * indicates for how many rows the cell extends. Its default value
   * is 1; if its value is set to 0, it extends until the end of the
   * table section (<thead>, <tbody>, <tfoot>, even if implicitly
   * defined), that the cell belongs to. Values higher than 65534 are
   * clipped down to 65534.
   */
  rowspan?: number;

  /**
   * This enumerated attribute defines the cells that the header
   * (defined in the <th>) element relates to. It may have the
   * following values
   */
  scope?: "row" | "col" | "rowgroup" | "colgroup";
}

export interface HTMLButton extends HTMLElement {
  /**
   * This Boolean attribute specifies that the button should have
   * input focus when the page loads. Only one element in a document
   * can have this attribute.
   */
  autofocus?: boolean;

  /**
   * This attribute on a <button> is nonstandard and
   * Firefox-specific. Unlike other browsers, Firefox persists the
   * dynamic disabled state of a <button> across page loads. Setting
   * autocomplete="off" on the button disables this feature; see
   * Firefox bug 654072.
   */
  autocomplete?: "off";

  /**
   * This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
   *
   * Firefox, unlike other browsers, persists the dynamic disabled
   * state of a <button> across page loads. To control this feature, use
   * the autocomplete attribute.
   */
  disabled?: boolean;

  /**
   * The <form> element to associate the button with (its form
   * owner). The value of this attribute must be the id of a <form> in
   * the same document. (If this attribute is not set, the <button> is
   * associated with its ancestor <form> element, if any.)
   *
   * This attribute lets you associate <button> elements to <form>s
   * anywhere in the document, not just inside a <form>. It can also
   * override an ancestor <form> element.
   */
  form?: string;

  /**
   * The URL that processes the information submitted by the
   * button. Overrides the action attribute of the button's form
   * owner. Does nothing if there is no form owner.
   */
  formaction?: string;

  /**
   * If the button is a submit button (it's inside/associated with a
   * <form> and doesn't have type="button"), specifies how to encode
   * the form data that is submitted. Possible values:
   *
   * - __application/x-www-form-urlencoded__: The default if the attribute
   *      is not used.
   * - __multipart/form-data__: Used to submit <input> elements with their
   *      type attributes set to file.
   * - __text/plain__: Specified as a debugging aid; shouldn't be used for
   *     real form submission.
   *
   * If this attribute is specified, it overrides the enctype
   * attribute of the button's form owner.
   */
  formenctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";

  /**
   * If the button is a submit button (it's inside/associated with a
   * <form> and doesn't have type="button"), this attribute specifies
   * the HTTP method used to submit the form. Possible values:
   */
  formmethod?: "post" | "POST" | "get" | "GET";

  /**
   * If the button is a submit button, this Boolean attribute
   * specifies that the form is not to be validated when it is
   * submitted. If this attribute is specified, it overrides the
   * novalidate attribute of the button's form owner.
   *
   * This attribute is also available on <input type="image"> and <input
   * type="submit"> elements.
   */
  formnovalidate?: boolean;

  /**
   * If the button is a submit button, this attribute is an
   * author-defined name or standardized, underscore-prefixed keyword
   * indicating where to display the response from submitting the
   * form. This is the name of, or keyword for, a browsing context (a
   * tab, window, or <iframe>). If this attribute is specified, it
   * overrides the target attribute of the button's form owner. The
   * following keywords have special meanings:
   */
  formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;

  /**
   * The name of the button, submitted as a pair with the button's
   * value as part of the form data, when that button is used to
   * submit the form.
   */
  name?: string;

  /**
   * Turns a <button> element into a popover control button; takes the
   * ID of the popover element to control as its value. See the
   * Popover API landing page for more details.
   */
  popovertarget?: string;

  /**
   * Specifies the the action to be performed on a popover element
   * being controlled by a control <button>. Possible values are:
   */
  popovertargetaction?: "hide" | "show" | "toggle";

  /**
   * The default behavior of the button.
   */
  type?: "submit" | "reset" | "action";

  /**
   * Defines the value associated with the button's name when it's
   * submitted with the form data. This value is passed to the server
   * in params when the form is submitted using this button.
   */
  value?: string;
}

export interface HTMLFieldSet extends HTMLElement {
  /**
   * If this Boolean attribute is set, all form controls that are
   * descendants of the <fieldset>, are disabled, meaning they are not
   * editable and won't be submitted along with the <form>. They won't
   * receive any browsing events, like mouse clicks or focus-related
   * events. By default browsers display such controls grayed
   * out. Note that form elements inside the <legend> element won't be
   * disabled.
   */
  disabled?: boolean;

  /**
   * This attribute takes the value of the id attribute of a <form>
   * element you want the <fieldset> to be part of, even if it is not
   * inside the form. Please note that usage of this is confusing — if
   * you want the <input> elements inside the <fieldset> to be
   * associated with the form, you need to use the form attribute
   * directly on those elements. You can check which elements are
   * associated with a form via JavaScript, using
   * HTMLFormElement.elements.
   */
  form?: string;

  /**
   * The name associated with the group.
   */
  name?: string;
}

export interface HTMLForm extends HTMLElement {
  /**
   * Space-separated character encodings the server accepts. The
   * browser uses them in the order in which they are listed. The
   * default value means the same encoding as the page. (In previous
   * versions of HTML, character encodings could also be delimited by
   * commas.)
   */
  "accept-charset"?: string;

  /**
   * Indicates whether input elements can by default have their values
   * automatically completed by the browser. autocomplete attributes
   * on form elements override it on <form>.
   */

  autocomplete?: "off" | "on";

  /**
   * The name of the form. The value must not be the empty string, and
   * must be unique among the form elements in the forms collection
   * that it is in, if any.
   */
  name?: string;

  /**
   * Controls the annotations and what kinds of links the form
   * creates. Annotations include `external`, `nofollow`, `opener`,
   * `noopener`, and `noreferrer`. Link types include help, prev, next,
   * search, and license. The rel value is a space-separated list of
   * these enumerated values.
   */
  rel?: string;

  /**
   * The URL that processes the form submission. This value can be
   * overridden by a formaction attribute on a <button>, <input
   * type="submit">, or <input type="image"> element. This attribute
   * is ignored when method="dialog" is set.
   */
  action?: string;

  /**
   * If the value of the method attribute is post, enctype is the MIME
   * type of the form submission.
   *
   * This value can be overridden by formenctype attributes on
   * <button>, <input type="submit">, or <input type="image">
   * elements.
   */
  enctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";

  /**
   * The HTTP method to submit the form with. The only allowed
   * methods/values are (case insensitive):
   *
   * This value is overridden by formmethod attributes on <button>,
   * <input type="submit">, or <input type="image"> elements.
   */
  method?: "post" | "get" | "dialog";

  /**
   * This Boolean attribute indicates that the form shouldn't be
   * validated when submitted. If this attribute is not set (and
   * therefore the form is validated), it can be overridden by a
   * formnovalidate attribute on a <button>, <input type="submit">, or
   * <input type="image"> element belonging to the form.
   */
  novalidate?: boolean;

  /**
   * Indicates where to display the response after submitting the
   * form. It is a name/keyword for a browsing context (for example,
   * tab, window, or iframe). The following keywords have special
   * meanings:
   */
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
}

export interface HTMLInput extends HTMLVoidElement {
  /**
   * Valid for the file input type only, the accept attribute defines
   * which file types are selectable in a file upload control. See the
   * file input type.
   */
  accept?: string;

  /**
   * Valid for the image button only, the alt attribute provides
   * alternative text for the image, displaying the value of the
   * attribute if the image src is missing or otherwise fails to
   * load. See the image input type.
   */
  alt?: string;

  /**
   * (Not a Boolean attribute!) The autocomplete attribute takes as
   * its value a space-separated string that describes what, if any,
   * type of autocomplete functionality the input should provide. A
   * typical implementation of autocomplete recalls previous values
   * entered in the same input field, but more complex forms of
   * autocomplete can exist. For instance, a browser could integrate
   * with a device's contacts list to autocomplete email addresses in
   * an email input field. See autocomplete for permitted values.

   * The autocomplete attribute is valid on hidden, text, search, url,
   * tel, email, date, month, week, time, datetime-local, number,
   * range, color, and password. This attribute has no effect on input
   * types that do not return numeric or text data, being valid for
   * all input types except checkbox, radio, file, or any of the
   * button types.
   *
   * See the autocomplete attribute for additional information, including
   * information on password security and how autocomplete is slightly
   * different for hidden than for other input types.
   */
  autocomplete?: string;

  /**
   * A Boolean attribute which, if present, indicates that the input
   * should automatically have focus when the page has finished
   * loading (or when the <dialog> containing the element has been
   * displayed).
   */
  autofocus?: boolean;

  /**
   * Introduced in the HTML Media Capture specification and valid for
   * the file input type only, the capture attribute defines which
   * media—microphone, video, or camera—should be used to capture a
   * new file for upload with file upload control in supporting
   * scenarios. See the file input type.
   */
  capture?: string;

  /**
   * Valid for both radio and checkbox types, checked is a Boolean
   * attribute. If present on a radio type, it indicates that the
   * radio button is the currently selected one in the group of
   * same-named radio buttons. If present on a checkbox type, it
   * indicates that the checkbox is checked by default (when the page
   * loads). It does not indicate whether this checkbox is currently
   * checked: if the checkbox's state is changed, this content
   * attribute does not reflect the change. (Only the
   * HTMLInputElement's checked IDL attribute is updated.)
   */
  checked?: boolean;

  /**
   * Valid for text and search input types only, the dirname attribute
   * enables the submission of the directionality of the element. When
   * included, the form control will submit with two name/value pairs:
   * the first being the name and value, the second being the value of
   * the dirname as the name with the value of ltr or rtl being set by
   * the browser.
   */
  dirname?: string;

  /**
   * A Boolean attribute which, if present, indicates that the user
   * should not be able to interact with the input. Disabled inputs
   * are typically rendered with a dimmer color or using some other
   * form of indication that the field is not available for use.
   * Specifically, disabled inputs do not receive the click event, and
   * disabled inputs are not submitted with the form.
   */
  disabled?: boolean;

  /**
   * A string specifying the <form> element with which the input is
   * associated (that is, its form owner). This string's value, if
   * present, must match the id of a <form> element in the same
   * document. If this attribute isn't specified, the <input> element
   * is associated with the nearest containing form, if any.
   *
   * The form attribute lets you place an input anywhere in the document
   * but have it included with a form elsewhere in the document.
   */
  form?: string;

  /**
   * A string indicating the URL to which to submit the data. This
   * takes precedence over the action attribute on the <form> element
   * that owns the <input>.
   *
   * Valid for the image and submit input types only.
   */
  formaction?: string;

  /**
   * A string that identifies the encoding method to use when
   * submitting the form data to the server
   */
  formenctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";

  /**
   * A string indicating the HTTP method to use when submitting the
   * form's data; this value overrides any method attribute given on
   * the owning form.
   */
  formmethod?: "get" | "post" | "dialog";

  /**
   * A Boolean attribute which, if present, specifies that the form
   * should not be validated before submission to the server. This
   * overrides the value of the novalidate attribute on the element's
   * owning form
   */
  formnovalidate?: boolean;

  /**
   * A string which specifies a name or keyword that indicates where
   * to display the response received after submitting the form. The
   * string must be the name of a browsing context (that is, a tab,
   * window, or <iframe>). A value specified here overrides any target
   * given by the target attribute on the <form> that owns this input.
   */
  formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;

  /**
   * Valid for the image input button only, the height is the height
   * of the image file to display to represent the graphical submit
   * button.
   */
  height?: number;

  /**
   * Global value valid for all elements, it provides a hint to
   * browsers as to the type of virtual keyboard configuration to use
   * when editing this element or its contents.
   */
  inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * The value given to the list attribute should be the id of a
   * <datalist> element located in the same document. The <datalist>
   * provides a list of predefined values to suggest to the user for
   * this input. Any values in the list that are not compatible with
   * the type are not included in the suggested options. The values
   * provided are suggestions, not requirements: users can select from
   * this predefined list or provide a different value.
   *
   * It is valid on text, search, url, tel, email, date, month, week,
   * time, datetime-local, number, range, and color.
   *
   * Per the specifications, the list attribute is not supported by the
   * hidden, password, checkbox, radio, file, or any of the button
   * types.
   */
  list?: string;

  /**
   * Valid for date, month, week, time, datetime-local, number, and
   * range, it defines the greatest value in the range of permitted
   * values. If the value entered into the element exceeds this, the
   * element fails constraint validation. If the value of the max
   * attribute isn't a number, then the element has no maximum value.
   *
   * There is a special case: if the data type is periodic (such as for
   * dates or times), the value of max may be lower than the value of
   * min, which indicates that the range may wrap around; for example,
   * this allows you to specify a time range from 10 PM to 4 AM.
   */
  max?: number | string;

  /**
   * Valid for text, search, url, tel, email, and password, it defines
   * the maximum number of characters (as UTF-16 code units) the user
   * can enter into the field. This must be an integer value 0 or
   * higher. If no maxlength is specified, or an invalid value is
   * specified, the field has no maximum length. This value must also
   * be greater than or equal to the value of minlength.
   *
   * The input will fail constraint validation if the length of the text
   * entered into the field is greater than maxlength UTF-16 code units
   * long. By default, browsers prevent users from entering more
   * characters than allowed by the maxlength attribute.
   */
  maxlength?: number;

  /**
   * Valid for date, month, week, time, datetime-local, number, and
   * range, it defines the most negative value in the range of
   * permitted values. If the value entered into the element is less
   * than this, the element fails constraint validation. If the value
   * of the min attribute isn't a number, then the element has no
   * minimum value.
   *
   * This value must be less than or equal to the value of the max
   * attribute. If the min attribute is present but is not specified
   * or is invalid, no min value is applied. If the min attribute is
   * valid and a non-empty value is less than the minimum allowed by
   * the min attribute, constraint validation will prevent form
   * submission. See Client-side validation for more information.
   *
   * There is a special case: if the data type is periodic (such as for
   * dates or times), the value of max may be lower than the value of
   * min, which indicates that the range may wrap around; for example,
   * this allows you to specify a time range from 10 PM to 4 AM.
   */
  min?: number | string;

  /**
   * Valid for text, search, url, tel, email, and password, it defines
   * the minimum number of characters (as UTF-16 code units) the user
   * can enter into the entry field. This must be a non-negative
   * integer value smaller than or equal to the value specified by
   * maxlength. If no minlength is specified, or an invalid value is
   * specified, the input has no minimum length.
   *
   * The input will fail constraint validation if the length of the text
   * entered into the field is fewer than minlength UTF-16 code units
   * long, preventing form submission.
   */
  minlength?: number;

  /**
   * The Boolean multiple attribute, if set, means the user can enter
   * comma separated email addresses in the email widget or can choose
   * more than one file with the file input.
   */
  multiple?: boolean;

  /**
   * A string specifying a name for the input control. This name is
   * submitted along with the control's value when the form data is
   * submitted.
   */
  name?: string;

  /**
   * Valid for text, search, url, tel, email, and password, the
   * pattern attribute defines a regular expression that the input's
   * value must match in order for the value to pass constraint
   * validation. It must be a valid JavaScript regular expression, as
   * used by the RegExp type, and as documented in our guide on
   * regular expressions; the 'u' flag is specified when compiling the
   * regular expression, so that the pattern is treated as a sequence
   * of Unicode code points, instead of as ASCII. No forward slashes
   * should be specified around the pattern text.
   */
  pattern?: string;

  /**
   * Valid for text, search, url, tel, email, password, and number,
   * the placeholder attribute provides a brief hint to the user as to
   * what kind of information is expected in the field. It should be a
   * word or short phrase that provides a hint as to the expected type
   * of data, rather than an explanation or prompt. The text must not
   * include carriage returns or line feeds. So for example if a field
   * is expected to capture a user's first name, and its label is
   * "First Name", a suitable placeholder might be "e.g. Mustafa"
   */
  placeholder?: string;

  /**
   * Turns an <input type="button"> element into a popover control
   * button; takes the ID of the popover element to control as its
   * value. See the Popover API landing page for more details.
   */
  popovertarget?: string;

  /**
   * Specifies the action to be performed on a popover element being
   * controlled by a control <input type="button">.
   */
  popovertargetaction?: "hide" | "show" | "toggle";

  /**
   * A Boolean attribute which, if present, indicates that the user
   * should not be able to edit the value of the input. The readonly
   * attribute is supported by the text, search, url, tel, email,
   * date, month, week, time, datetime-local, number, and password
   * input types.
   */
  readonly?: boolean;

  /**
   * required is a Boolean attribute which, if present, indicates that
   * the user must specify a value for the input before the owning
   * form can be submitted. The required attribute is supported by
   * text, search, url, tel, email, date, month, week, time,
   * datetime-local, number, password, checkbox, radio, and file
   * inputs.
   */
  required?: boolean;

  /**
   * Valid for email, password, tel, url, and text, the size attribute
   * specifies how much of the input is shown. Basically creates same
   * result as setting CSS width property with a few specialities. The
   * actual unit of the value depends on the input type. For password
   * and text, it is a number of characters (or em units) with a
   * default value of 20, and for others, it is pixels (or px
   * units). CSS width takes precedence over the size attribute.
   */
  size?: number;

  /**
   * Valid for the image input button only, the src is string
   * specifying the URL of the image file to display to represent the
   * graphical submit button. See the image input type.
   */
  src?: string;

  /**
   * Valid for date, month, week, time, datetime-local, number, and
   * range, the step attribute is a number that specifies the
   * granularity that the value must adhere to.
   */
  step?: number;

  /**
   * Global attribute valid for all elements, including all input
   * types, containing a text representing advisory information
   * related to the element it belongs to. Such information can
   * typically, but not necessarily, be presented to the user as a
   * tooltip. The title should NOT be used as the primary explanation
   * of the purpose of the form control. Instead, use the <label>
   * element with a for attribute set to the form control's id
   * attribute.
   */
  title?: string;

  /**
   * a string specifying the type of control to render. for example,
   * to create a checkbox, a value of checkbox is used. if omitted (or
   * an unknown value is specified), the input type text is used,
   * creating a plaintext input field.
   */
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  /**
   * The input control's value. When specified in the HTML, this is
   * the initial value, and from then on it can be altered or
   * retrieved at any time using JavaScript to access the respective
   * HTMLInputElement object's value property. The value attribute is
   * always optional, though should be considered mandatory for
   * checkbox, radio, and hidden
   */
  value?: string | number;

  /**
   * Valid for the image input button only, the width is the width of
   * the image file to display to represent the graphical submit
   * button.
   */
  width?: number;
}

export interface HTMLLabel extends HTMLElement {
  /**
   * The value of the for attribute must be a single id for a
   * labelable form-related element in the same document as the
   * <label> element. So, any given label element can be associated
   * with only one form control.
   */
  for?: string;
}

export interface HTMLMeter extends HTMLElement {
  /**
   * The current numeric value. This must be between the minimum and
   * maximum values (min attribute and max attribute) if they are
   * specified. If unspecified or malformed, the value is 0. If
   * specified, but not within the range given by the min attribute
   * and max attribute, the value is equal to the nearest end of the
   * range.
   */
  value?: number;

  /**
   * The lower numeric bound of the measured range. This must be less
   * than the maximum value (max attribute), if specified. If
   * unspecified, the minimum value is 0.
   */
  min?: number;

  /**
   * The upper numeric bound of the measured range. This must be
   * greater than the minimum value (min attribute), if specified. If
   * unspecified, the maximum value is 1.
   */
  max?: number;

  /**
   * The upper numeric bound of the low end of the measured
   * range. This must be greater than the minimum value (min
   * attribute), and it also must be less than the high value and
   * maximum value (high attribute and max attribute, respectively),
   * if any are specified. If unspecified, or if less than the minimum
   * value, the low value is equal to the minimum value.
   */
  low?: number;

  /**
   * The lower numeric bound of the high end of the measured
   * range. This must be less than the maximum value (max attribute),
   * and it also must be greater than the low value and minimum value
   * (low attribute and min attribute, respectively), if any are
   * specified. If unspecified, or if greater than the maximum value,
   * the high value is equal to the maximum value.
   */
  high?: number;

  /**
   * This attribute indicates the optimal numeric value. It must be
   * within the range (as defined by the min attribute and max
   * attribute). When used with the low attribute and high attribute,
   * it gives an indication where along the range is considered
   * preferable. For example, if it is between the min attribute and
   * the low attribute, then the lower range is considered
   * preferred. The browser may color the meter's bar differently
   * depending on whether the value is less than or equal to the
   * optimum value.
   */
  optimum?: number;
}

export interface HTMLOptionGroup extends HTMLElement {
  /**
   * If this Boolean attribute is set, none of the items in this
   * option group is selectable. Often browsers grey out such control
   * and it won't receive any browsing events, like mouse clicks or
   * focus-related ones.
   */
  disabled?: boolean;

  /**
   * The name of the group of options, which the browser can use when
   * labeling the options in the user interface. This attribute is
   * mandatory if this element is used.
   */
  label?: boolean;
}

export interface HTMLOption extends HTMLElement {
  /**
   * If this Boolean attribute is set, this option is not
   * checkable. Often browsers grey out such control and it won't
   * receive any browsing event, like mouse clicks or focus-related
   * ones. If this attribute is not set, the element can still be
   * disabled if one of its ancestors is a disabled <optgroup>
   * element.
   */
  disabled?: boolean;

  /**
   * This attribute is text for the label indicating the meaning of
   * the option. If the label attribute isn't defined, its value is
   * that of the element text content.
   */
  label?: string;

  /**
   * If present, this Boolean attribute indicates that the option is
   * initially selected. If the <option> element is the descendant of
   * a <select> element whose multiple attribute is not set, only one
   * single <option> of this <select> element may have the selected
   * attribute.
   */
  selected?: boolean;

  /**
   * The content of this attribute represents the value to be
   * submitted with the form, should this option be selected. If this
   * attribute is omitted, the value is taken from the text content of
   * the option element.
   */
  value?: string | number;
}

export interface HTMLOutput extends HTMLElement {
  /**
   * A space-separated list of other elements' ids, indicating that
   * those elements contributed input values to (or otherwise
   * affected) the calculation.
   */
  for?: string;

  /**
   * The <form> element to associate the output with (its form
   * owner). The value of this attribute must be the id of a <form> in
   * the same document. (If this attribute is not set, the <output> is
   * associated with its ancestor <form> element, if any.)
   *
   * This attribute lets you associate <output> elements to <form>s
   * anywhere in the document, not just inside a <form>. It can also
   * override an ancestor <form> element.
   */
  form?: string;

  /**
   * The element's name. Used in the form.elements API.
   */
  name?: string;
}

export interface HTMLProgress {
  /**
   * This attribute describes how much work the task indicated by the
   * progress element requires. The max attribute, if present, must
   * have a value greater than 0 and be a valid floating point
   * number. The default value is 1.
   */
  max?: number;

  /**
   * This attribute specifies how much of the task that has been
   * completed. It must be a valid floating point number between 0 and
   * max, or between 0 and 1 if max is omitted. If there is no value
   * attribute, the progress bar is indeterminate; this indicates that
   * an activity is ongoing with no indication of how long it is
   * expected to take.
   */
  value?: number;
}

export interface HTMLSelect extends HTMLElement {
  /**
   * A string providing a hint for a user agent's autocomplete
   * feature. See The HTML autocomplete attribute for a complete list
   * of values and details on how to use autocomplete.
   */
  autocomplete?: "on" | "off";

  /**
   * This Boolean attribute lets you specify that a form control
   * should have input focus when the page loads. Only one form
   * element in a document can have the autofocus attribute.
   */
  autofocus?: boolean;

  /**
   * This Boolean attribute indicates that the user cannot interact
   * with the control. If this attribute is not specified, the control
   * inherits its setting from the containing element, for example
   * <fieldset>; if there is no containing element with the disabled
   * attribute set, then the control is enabled.
   */
  disabled?: boolean;

  /**
   * The <form> element to associate the <select> with (its form
   * owner). The value of this attribute must be the id of a <form> in
   * the same document. (If this attribute is not set, the <select> is
   * associated with its ancestor <form> element, if any.)
   *
   * This attribute lets you associate <select> elements to <form>s
   * anywhere in the document, not just inside a <form>. It can also
   * override an ancestor <form> element.
   */
  form?: string;

  /**
   * This Boolean attribute indicates that multiple options can be
   * selected in the list. If it is not specified, then only one
   * option can be selected at a time. When multiple is specified,
   * most browsers will show a scrolling list box instead of a single
   * line dropdown.
   */
  multiple?: true;

  /**
   * This attribute is used to specify the name of the control.
   */
  name?: string;

  /**
   * A Boolean attribute indicating that an option with a non-empty
   * string value must be selected.
   */
  required?: boolean;

  /**
   * If the control is presented as a scrolling list box (e.g. when
   * multiple is specified), this attribute represents the number of
   * rows in the list that should be visible at one time. Browsers are
   * not required to present a select element as a scrolled list
   * box. The default value is 0.
   */
  size?: number;
}

export interface HTMLTextArea extends HTMLElement {
  /**
   * This attribute indicates whether the value of the control can be
   * automatically completed by the browser.
   */
  autocomplete?: "on" | "off";

  /**
   * This Boolean attribute lets you specify that a form control
   * should have input focus when the page loads. Only one
   * form-associated element in a document can have this attribute
   * specified.
   */
  autofocus?: boolean;

  /**
   * The visible width of the text control, in average character
   * widths. If it is specified, it must be a positive integer. If it
   * is not specified, the default value is 20.
   */
  cols?: number;

  /**
   * This Boolean attribute indicates that the user cannot interact
   * with the control. If this attribute is not specified, the control
   * inherits its setting from the containing element, for example
   * <fieldset>; if there is no containing element when the disabled
   * attribute is set, the control is enabled.
   */
  disabled?: boolean;

  /**
   * The form element that the <textarea> element is associated with
   * (its "form owner"). The value of the attribute must be the id of
   * a form element in the same document. If this attribute is not
   * specified, the <textarea> element must be a descendant of a form
   * element. This attribute enables you to place <textarea> elements
   * anywhere within a document, not just as descendants of form
   * elements.
   */
  form?: string;

  /**
   * The maximum number of characters (UTF-16 code units) that the
   * user can enter. If this value isn't specified, the user can enter
   * an unlimited number of characters.
   */
  maxlength?: number;

  /**
   * The minimum number of characters (UTF-16 code units) required
   * that the user should enter.
   */
  minlength?: number;

  /**
   * The name of the control.
   */
  name?: string;

  /**
   * A hint to the user of what can be entered in the
   * control. Carriage returns or line-feeds within the placeholder
   * text must be treated as line breaks when rendering the hint.
   */
  placeholder?: string;

  /**
   * This Boolean attribute indicates that the user cannot modify the
   * value of the control. Unlike the disabled attribute, the readonly
   * attribute does not prevent the user from clicking or selecting in
   * the control. The value of a read-only control is still submitted
   * with the form.
   */
  readonly?: boolean;

  /**
   * This attribute specifies that the user must fill in a value
   * before submitting a form.
   */
  required?: boolean;

  /**
   * The number of visible text lines for the control. If it is
   * specified, it must be a positive integer. If it is not specified,
   * the default value is 2.
   */
  rows?: number;

  /**
   * Specifies whether the <textarea> is subject to spell checking by
   * the underlying browser/OS. The value can be:
   */
  spellcheck?: "true" | "false" | "default";

  /**
   * Indicates how the control should wrap the value for form
   * submission
   */
  wrap?: "hard" | "soft" | "off";
}

export interface HTMLDetails extends HTMLElement {
  /**
   * This Boolean attribute indicates whether the details — that is,
   * the contents of the <details> element — are currently
   * visible. The details are shown when this attribute exists, or
   * hidden when this attribute is absent. By default this attribute
   * is absent which means the details are not visible.
   */
  open?: boolean;
}

export interface HTMLDialog extends HTMLElement {
  /**
   * Indicates that the dialog is active and can be interacted
   * with. When the open attribute is not set, the dialog shouldn't be
   * shown to the user. It is recommended to use the .show() or
   * .showModal() methods to render dialogs, rather than the open
   * attribute. If a <dialog> is opened using the open attribute, it
   * will be non-modal.
   */
  open?: boolean;
}

export interface HTMLElements {
  /**
   * Represents the root (top-level element) of an HTML document, so it is also
   * referred to as the root element. All other elements must be descendants of
   * this element.
   */
  html: HTMLHTML;

  /**
   * Defines an area inside an image map that has predefined clickable areas.
   * An image map allows geometric areas on an image to be associated with
   * hyperlink.
   */
  area: HTMLArea;

  /**
   * Specifies the base URL to use for all relative URLs in a
   * document. There can be only one such element in a document.
   */
  base: HTMLBase;

  /**
   * The <head> HTML element contains machine-readable information (metadata)
   * about the document, like its title, scripts, and style sheets.
   */
  head: HTMLHead;

  /**
   * The <link> HTML element specifies relationships between the
   * current document and an external resource. This element is most
   * commonly used to link to stylesheets, but is also used to
   * establish site icons (both "favicon" style icons and icons for
   * the home screen and apps on mobile devices) among other things.
   */
  link: HTMLLink;

  /**
   * Metadata contains information about the page. This includes
   * information about styles, scripts and data to help software
   * (search engines, browsers, etc.) use and render the
   * page. Metadata for styles and scripts may be defined in the page
   * or link to another file that has the information.
   */
  meta: HTMLMeta;

  /**
   * Contains style information for a document, or part of a
   * document. It contains CSS, which is applied to the contents of
   * the document containing this element.
   */
  style: HTMLStyle;

  /**
   * Defines the document's title that is shown in a browser's title
   * bar or a page's tab. It only contains text; tags within the
   * element are ignored.
   */
  title: HTMLTitle;

  /**
   * represents the content of an HTML document. There can be only one
   * such element in a document.
   */
  body: HTMLBody;

  /**
   * Indicates that the enclosed HTML provides contact information for
   * a person or people, or for an organization.
   */
  address: HTMLElement;

  /**
   * Represents a self-contained composition in a document, page,
   * application, or site, which is intended to be independently
   * distributable or reusable (e.g., in syndication). Examples
   * include: a forum post, a magazine or newspaper article, or a blog
   * entry, a product card, a user-submitted comment, an interactive
   * widget or gadget, or any other independent item of content.
   */
  article: HTMLElement;

  /**
   * Represents a portion of a document whose content is only
   * indirectly related to the document's main content. Asides are
   * frequently presented as sidebars or call-out boxes.
   */
  aside: HTMLElement;

  /**
   * Represents a footer for its nearest ancestor sectioning content
   * or sectioning root element. A <footer> typically contains
   * information about the author of the section, copyright data or
   * links to related documents.
   */
  footer: HTMLElement;

  /**
   * Represents introductory content, typically a group of
   * introductory or navigational aids. It may contain some heading
   * elements but also a logo, a search form, an author name, and
   * other elements.
   */
  header: HTMLElement;

  /**
   * Represent six levels of section headings. <h1> is the highest
   * section level and <h6> is the lowest.
   */
  h1: HTMLElement;

  /**
   * Represent six levels of section headings. <h1> is the highest
   * section level and <h6> is the lowest.
   */
  h2: HTMLElement;

  /**
   * Represent six levels of section headings. <h1> is the highest
   * section level and <h6> is the lowest.
   */
  h3: HTMLElement;

  /**
   * Represent six levels of section headings. <h1> is the highest
   * section level and <h6> is the lowest.
   */
  h4: HTMLElement;

  /**
   * Represent six levels of section headings. <h1> is the highest
   * section level and <h6> is the lowest.
   */
  h5: HTMLElement;

  /**
   * Represent six levels of section headings. <h1> is the highest
   * section level and <h6> is the lowest.
   */
  h6: HTMLElement;

  /**
   * Represents a heading grouped with any secondary content, such as
   * subheadings, an alternative title, or a tagline.
   */
  hgroup: HTMLElement;

  /**
   * Represents the dominant content of the body of a document. The
   * main content area consists of content that is directly related to
   * or expands upon the central topic of a document, or the central
   * functionality of an application.
   */
  main: HTMLElement;

  /**
   * Represents a section of a page whose purpose is to provide
   * navigation links, either within the current document or to other
   * documents. Common examples of navigation sections are menus,
   * tables of contents, and indexes.
   */
  nav: HTMLElement;

  /**
   * Represents a generic standalone section of a document, which
   * doesn't have a more specific semantic element to represent
   * it. Sections should always have a heading, with very few
   * exceptions.
   */
  section: HTMLElement;

  /**
   * Indicates that the enclosed text is an extended
   * quotation. Usually, this is rendered visually by indentation. A
   * URL for the source of the quotation may be given using the cite
   * attribute, while a text representation of the source can be given
   * using the <cite> element.
   */
  blockquotee: HTMLBlockquote;

  /**
   * Provides the description, definition, or value for the preceding
   * term (<dt>) in a description list (<dl>).
   */
  dd: HTMLElement;

  /**
   * The generic container for flow content. It has no effect on the
   * content or layout until styled in some way using CSS (e.g.,
   * styling is directly applied to it, or some kind of layout model
   * like flexbox is applied to its parent element).
   */
  div: HTMLElement;

  /**
   * Represents a description list. The element encloses a list of
   * groups of terms (specified using the <dt> element) and
   * descriptions (provided by <dd> elements). Common uses for this
   * element are to implement a glossary or to display metadata (a
   * list of key-value pairs).
   */
  dl: HTMLElement;

  /**
   * Specifies a term in a description or definition list, and as such
   * must be used inside a <dl> element. It is usually followed by a
   * <dd> element; however, multiple <dt> elements in a row indicate
   * several terms that are all defined by the immediate next <dd>
   * element
   */
  dt: HTMLElement;

  /**
   * Represents a caption or legend describing the rest of the
   * contents of its parent <figure> element.
   */
  figcaption: HTMLElement;

  /**
   * Represents self-contained content, potentially with an optional
   * caption, which is specified using the <figcaption> element. The
   * figure, its caption, and its contents are referenced as a single
   * unit.
   */
  figure: HTMLElement;

  /**
   * Represents a thematic break between paragraph-level elements: for
   * example, a change of scene in a story, or a shift of topic within
   * a section.
   */
  hr: HTMLVoidElement;

  /**
   * Represents an item in a list. It must be contained in a parent
   * element: an ordered list (<ol>), an unordered list (<ul>), or a
   * menu (<menu>). In menus and unordered lists, list items are
   * usually displayed using bullet points. In ordered lists, they are
   * usually displayed with an ascending counter on the left, such as
   * a number or letter.
   */
  li: HTMListItem;

  /**
   * A semantic alternative to <ul>, but treated by browsers (and
   * exposed through the accessibility tree) as no different than
   * <ul>. It represents an unordered list of items (which are
   * represented by <li> elements).
   */
  menu: HTMLElement;

  /**
   * Represents an ordered list of items — typically rendered as a
   * numbered list.
   */
  ol: HTMLOrderedList;

  /**
   * Represents a paragraph. Paragraphs are usually represented in
   * visual media as blocks of text separated from adjacent blocks by
   * blank lines and/or first-line indentation, but HTML paragraphs
   * can be any structural grouping of related content, such as images
   * or form fields.
   */
  p: HTMLElement;

  /**
   * Represents preformatted text which is to be presented exactly as
   * written in the HTML file. The text is typically rendered using a
   * non-proportional, or monospaced, font. Whitespace inside this
   * element is displayed as written.
   */
  pre: HTMLElement;

  /**
   * Represents an unordered list of items, typically rendered as a
   * bulleted list.
   */
  ul: HTMLElement;

  /**
   * Together with its href attribute, creates a hyperlink to web
   * pages, files, email addresses, locations in the same page, or
   * anything else a URL can address.
   */
  a: HTMLAnchor;

  /**
   * Represents an abbreviation or acronym.
   */
  abbr: HTMLElement;

  /**
   * Used to draw the reader's attention to the element's contents,
   * which are not otherwise granted special importance. This was
   * formerly known as the Boldface element, and most browsers still
   * draw the text in boldface. However, you should not use <b> for
   * styling text or granting importance. If you wish to create
   * boldface text, you should use the CSS font-weight property. If
   * you wish to indicate an element is of special importance, you
   * should use the strong element.
   */
  b: HTMLElement;

  /**
   * Tells the browser's bidirectional algorithm to treat the text it
   * contains in isolation from its surrounding text. It's
   * particularly useful when a website dynamically inserts some text
   * and doesn't know the directionality of the text being inserted.
   */
  bdi: HTMLElement;

  /**
   * Overrides the current directionality of text, so that the text
   * within is rendered in a different direction.
   */
  bdo: HTMLBDO;

  /**
   * Produces a line break in text (carriage-return). It is useful for
   * writing a poem or an address, where the division of lines is
   * significant.
   */
  br: HTMLVoidElement;

  /**
   * Used to mark up the title of a cited creative work. The reference
   * may be in an abbreviated form according to context-appropriate
   * conventions related to citation metadata.
   */
  cite: HTMLElement;

  /**
   * Displays its contents styled in a fashion intended to indicate
   * that the text is a short fragment of computer code. By default,
   * the content text is displayed using the user agent default
   * monospace font.
   */
  code: HTMLElement;

  /**
   * inks a given piece of content with a machine-readable
   * translation. If the content is time- or date-related, the time
   * element must be used.
   */
  data: HTMLData;

  /**
   * Used to indicate the term being defined within the context of a
   * definition phrase or sentence. The ancestor <p> element, the
   * <dt>/<dd> pairing, or the nearest section ancestor of the <dfn>
   * element, is considered to be the definition of the term.
   */
  dfn: HTMLElement;

  /**
   * Marks text that has stress emphasis. The <em> element can be
   * nested, with each level of nesting indicating a greater degree of
   * emphasis.
   */
  em: HTMLElement;

  /**
   * Represents a range of text that is set off from the normal text
   * for some reason, such as idiomatic text, technical terms,
   * taxonomical designations, among others. Historically, these have
   * been presented using italicized type, which is the original
   * source of the <i> naming of this element.
   */
  i: HTMLElement;

  /**
   * Represents a span of inline text denoting textual user input from
   * a keyboard, voice input, or any other text entry device. By
   * convention, the user agent defaults to rendering the contents of
   * a <kbd> element using its default monospace font, although this
   * is not mandated by the HTML standard.
   */
  kdb: HTMLElement;

  /**
   * Represents text which is marked or highlighted for reference or
   * notation purposes due to the marked passage's relevance in the
   * enclosing context.
   */
  mark: HTMLElement;

  /**
   * Indicates that the enclosed text is a short inline
   * quotation. Most modern browsers implement this by surrounding the
   * text in quotation marks. This element is intended for short
   * quotations that don't require paragraph breaks; for long
   * quotations use the <blockquote> element.
   */
  q: HTMLBlockquote;

  /**
   * Used to provide fall-back parentheses for browsers that do not
   * support display of ruby annotations using the <ruby> element. One
   * <rp> element should enclose each of the opening and closing
   * parentheses that wrap the <rt> element that contains the
   * annotation's text.
   */
  rp: HTMLElement;

  /**
   * Specifies the ruby text component of a ruby annotation, which is
   * used to provide pronunciation, translation, or transliteration
   * information for East Asian typography. The <rt> element must
   * always be contained within a <ruby> element.
   */
  rt: HTMLElement;

  /**
   * Represents small annotations that are rendered above, below, or
   * next to base text, usually used for showing the pronunciation of
   * East Asian characters. It can also be used for annotating other
   * kinds of text, but this usage is less common.
   */
  ruby: HTMLElement;

  /**
   * Renders text with a strikethrough, or a line through it. Use the
   * <s> element to represent things that are no longer relevant or no
   * longer accurate. However, <s> is not appropriate when indicating
   * document edits; for that, use the del and ins elements, as
   * appropriate.
   */
  s: HTMLElement;

  /**
   * Used to enclose inline text which represents sample (or quoted)
   * output from a computer program. Its contents are typically
   * rendered using the browser's default monospaced font (such as
   * Courier or Lucida Console).
   */
  samp: HTMLElement;

  /**
   * Represents side-comments and small print, like copyright and
   * legal text, independent of its styled presentation. By default,
   * it renders text within it one font-size smaller, such as from
   * small to x-small.
   */
  small: HTMLElement;

  /**
   * A generic inline container for phrasing content, which does not
   * inherently represent anything. It can be used to group elements
   * for styling purposes (using the class or id attributes), or
   * because they share attribute values, such as lang. It should be
   * used only when no other semantic element is appropriate. <span>
   * is very much like a div element, but div is a block-level element
   * whereas a <span> is an inline-level element.
   */
  span: HTMLElement;

  /**
   * Indicates that its contents have strong importance, seriousness,
   * or urgency. Browsers typically render the contents in bold type.
   */
  strong: HTMLElement;

  /**
   * Specifies inline text which should be displayed as subscript for
   * solely typographical reasons. Subscripts are typically rendered
   * with a lowered baseline using smaller text.
   */
  sub: HTMLElement;

  /**
   * Specifies inline text which is to be displayed as superscript for
   * solely typographical reasons. Superscripts are usually rendered
   * with a raised baseline using smaller text.
   */
  sup: HTMLElement;

  /**
   * Represents a specific period in time. It may include the datetime
   * attribute to translate dates into machine-readable format,
   * allowing for better search engine results or custom features such
   * as reminders.
   */
  time: HTMLTime;

  /**
   * Represents a span of inline text which should be rendered in a
   * way that indicates that it has a non-textual annotation. This is
   * rendered by default as a simple solid underline, but may be
   * altered using CSS.
   */
  u: HTMLElement;

  /**
   * Represents the name of a variable in a mathematical expression or
   * a programming context. It's typically presented using an
   * italicized version of the current typeface, although that
   * behavior is browser-dependent.
   */
  var: HTMLElement;

  /**
   * Represents a word break opportunity—a position within text where
   * the browser may optionally break a line, though its line-breaking
   * rules would not otherwise create a break at that location.
   */
  wbr: HTMLVoidElement;

  /**
   * Defines an area inside an image map that has predefined clickable
   * areas. An image map allows geometric areas on an image to be
   * associated with hyperlink.
   */
  audio: HTMLAudio;

  /**
   * Embeds an image into the document.
   */
  img: HTMLImage;

  /**
   * Used with <area> elements to define an image map (a clickable
   * link area).
   */
  map: HTMLMap;

  /**
   * Used as a child of the media elements, audio and video. It lets
   * you specify timed text tracks (or time-based data), for example
   * to automatically handle subtitles. The tracks are formatted in
   * WebVTT format (.vtt files)—Web Video Text Tracks.
   */
  track: HTMLTrack;

  /**
   * Embeds a media player which supports video playback into the
   * document. You can use <video> for audio content as well, but the
   * audio element may provide a more appropriate user experience.
   */
  video: HTMLVideo;

  /**
   * Embeds external content at the specified point in the
   * document. This content is provided by an external application or
   * other source of interactive content such as a browser plug-in.
   */
  embed: HTMLEmbed;

  /**
   * Represents a nested browsing context, embedding another HTML page
   * into the current one.
   */
  iframe: HTMLIFrame;

  /**
   * Represents an external resource, which can be treated as an
   * image, a nested browsing context, or a resource to be handled by
   * a plugin.
   */
  object: HTMLObject;

  /**
   * Contains zero or more <source> elements and one <img> element to
   * offer alternative versions of an image for different
   * display/device scenarios.
   */
  picture: HTMLElement;

  /**
   * Enables the embedding of another HTML page into the current one
   * for the purposes of allowing smoother navigation into new pages.
   */
  portal: HTMLPortal;

  /**
   * Specifies multiple media resources for the picture, the audio
   * element, or the video element. It is a void element, meaning that
   * it has no content and does not have a closing tag. It is commonly
   * used to offer the same media content in multiple file formats in
   * order to provide compatibility with a broad range of browsers
   * given their differing support for image file formats and media
   * file formats.
   */
  source: HTMLSource;

  /**
   * Container element to use with either the canvas scripting API or
   * the WebGL API to draw graphics and animations.
   */
  canvas: HTMLCanvas;

  /**
   * Defines a section of HTML to be inserted if a script type on the
   * page is unsupported or if scripting is currently turned off in
   * the browser.
   */
  noscript: HTMLElement;

  /**
   * Used to embed executable code or data; this is typically used to
   * embed or refer to JavaScript code. The <script> element can also
   * be used with other languages, such as WebGL's GLSL shader
   * programming language and JSON.
   */
  script: HTMLScript;

  /**
   * Represents a range of text that has been deleted from a
   * document. This can be used when rendering "track changes" or
   * source code diff information, for example. The <ins> element can
   * be used for the opposite purpose: to indicate text that has been
   * added to the document.
   */
  del: HTMLEdit;

  /**
   * Represents a range of text that has been added to a document. You
   * can use the <del> element to similarly represent a range of text
   * that has been deleted from the document.
   */
  ins: HTMLEdit;

  /**
   * Specifies the caption (or title) of a table.
   */
  caption: HTMLElement;

  /**
   * Defines a column within a table and is used for defining common
   * semantics on all common cells. It is generally found within a
   * <colgroup> element.
   */
  col: HTMLCol;

  /**
   * Defines a group of columns within a table.
   */
  colgroup: HTMLCol;

  /**
   * Represents tabular data — that is, information presented in a
   * two-dimensional table comprised of rows and columns of cells
   * containing data.
   */
  table: HTMLElement;

  /**
   * Encapsulates a set of table rows (<tr> elements), indicating that
   * they comprise the body of the table (<table>).
   */
  tbody: HTMLElement;

  /**
   * Defines a cell of a table that contains data. It participates in
   * the table model.
   */
  td: HTMLTd;

  /**
   * Defines a set of rows summarizing the columns of the table.
   */
  tfoot: HTMLElement;

  /**
   * Defines a cell as header of a group of table cells. The exact
   * nature of this group is defined by the scope and headers
   * attributes.
   */
  th: HTMLTh;

  /**
   * Defines a set of rows defining the head of the columns of the
   * table.
   */
  thead: HTMLElement;

  /**
   * Defines a row of cells in a table. The row's cells can then be
   * established using a mix of <td> (data cell) and <th> (header
   * cell) elements.
   */
  tr: HTMLElement;

  /**
   * An interactive element activated by a user with a mouse,
   * keyboard, finger, voice command, or other assistive
   * technology. Once activated, it then performs an action, such as
   * submitting a form or opening a dialog.
   */
  button: HTMLButton;

  /**
   * Contains a set of <option> elements that represent the
   * permissible or recommended options available to choose from
   * within other controls.
   */
  datalist: HTMLElement;

  /**
   * Used to group several controls as well as labels (<label>) within
   * a web form.
   */
  fieldset: HTMLFieldSet;

  /**
   * Represents a document section containing interactive controls for
   * submitting information.
   */
  form: HTMLForm;

  /**
   * Used to create interactive controls for web-based forms in order
   * to accept data from the user; a wide variety of types of input
   * data and control widgets are available, depending on the device
   * and user agent. The <input> element is one of the most powerful
   * and complex in all of HTML due to the sheer number of
   * combinations of input types and attributes.
   */

  input: HTMLInput;

  /**
   * Represents a caption for an item in a user interface.
   */
  label: HTMLLabel;

  /**
   * Represents a caption for the content of its parent <fieldset>.
   */
  legend: HTMLElement;

  /**
   * Represents either a scalar value within a known range or a
   * fractional value.
   */
  meter: HTMLMeter;

  /**
   * Creates a grouping of options within a <select> element.
   */
  optgroup: HTMLOptionGroup;

  /**
   * Used to define an item contained in a select, an <optgroup>, or a
   * <datalist> element. As such, <option> can represent menu items in
   * popups and other lists of items in an HTML document.
   */
  option: HTMLOption;

  /**
   * Container element into which a site or app can inject the results
   * of a calculation or the outcome of a user action.
   */
  output: HTMLOutput;

  /**
   * Displays an indicator showing the completion progress of a task,
   * typically displayed as a progress bar.
   */
  progress: HTMLProgress;

  /**
   * Represents a control that provides a menu of options.
   */
  select: HTMLSelect;

  /**
   * Represents a multi-line plain-text editing control, useful when
   * you want to allow users to enter a sizeable amount of free-form
   * text, for example a comment on a review or feedback form.
   */
  texarea: HTMLTextArea;

  /**
   * Creates a disclosure widget in which information is visible only
   * when the widget is toggled into an "open" state. A summary or
   * label must be provided using the <summary> element.
   */
  details: HTMLDetails;

  /**
   * Represents a dialog box or other interactive component, such as a
   * dismissible alert, inspector, or subwindow.
   */
  dialog: HTMLDialog;

  /**
   * Specifies a summary, caption, or legend for a details element's
   * disclosure box. Clicking the <summary> element toggles the state
   * of the parent <details> element open and closed.
   */
  summary: HTMLElement;
}
