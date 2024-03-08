import { OrderProduct } from "../interfaces/OrderProduct";

export const order_confirmation = (
  orderDetail: {
    orderNumber: String;
    name: String;
    email: String;
    city: String;
    zip: String;
    area: String;
    address: String;
    status: String;
    shippingMethod: String;
    payment: String;
    onlineMethod: String | null;
    price: number;
    isRegisteredUser: Boolean;
    orderedOn: Date;
  },
  products: Array<OrderProduct>
) => {
  return `<!DOCTYPE html>
<html ⚡4email data-css-strict>
  <head>
    <meta charset="utf-8" />
    <style amp4email-boilerplate>
      body {
        visibility: hidden;
      }
    </style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>

    <style amp-custom>
      u + .body img ~ div div {
        display: none;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
      }
      a.es-button {
        text-decoration: none;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
      }
      .es-button-border:hover > a.es-button {
        color: #ffffff;
      }
      body {
        width: 100%;
        height: 100%;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0px;
      }
      table td,
      body,
      .es-wrapper {
        padding: 0;
        margin: 0;
      }
      .es-content,
      .es-header,
      .es-footer {
        width: 100%;
        table-layout: fixed;
      }
      p,
      hr {
        margin: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        font-family: arial, "helvetica neue", helvetica, sans-serif;
        letter-spacing: 0;
      }
      .es-left {
        float: left;
      }
      .es-right {
        float: right;
      }
      .es-menu td {
        border: 0;
      }
      s {
        text-decoration: line-through;
      }
      ul,
      ol {
        font-family: arial, "helvetica neue", helvetica, sans-serif;
        padding: 0px 0px 0px 40px;
        margin: 15px 0px;
      }
      ul li {
        color: #333333;
      }
      ol li {
        color: #333333;
      }
      li {
        margin: 0px 0px 15px;
        font-size: 14px;
      }
      a {
        text-decoration: underline;
      }
      .es-menu td a {
        font-family: arial, "helvetica neue", helvetica, sans-serif;
        text-decoration: none;
        display: block;
      }
      .es-wrapper {
        width: 100%;
        height: 100%;
      }
      .es-wrapper-color,
      .es-wrapper {
        background-color: #fafafa;
      }
      .es-content-body p,
      .es-footer-body p,
      .es-header-body p,
      .es-infoblock p {
        font-family: arial, "helvetica neue", helvetica, sans-serif;
        line-height: 150%;
        letter-spacing: 0;
      }
      .es-header {
        background-color: transparent;
      }
      .es-header-body {
        background-color: transparent;
      }
      .es-header-body p {
        color: #333333;
        font-size: 14px;
      }
      .es-header-body a {
        color: #666666;
        font-size: 14px;
      }
      .es-footer {
        background-color: transparent;
      }
      .es-footer-body {
        background-color: #ffffff;
      }
      .es-footer-body p {
        color: #333333;
        font-size: 12px;
      }
      .es-footer-body a {
        color: #333333;
        font-size: 12px;
      }
      .es-content-body {
        background-color: #ffffff;
      }
      .es-content-body p {
        color: #333333;
        font-size: 14px;
      }
      .es-content-body a {
        color: #5c68e2;
        font-size: 14px;
      }
      .es-infoblock p {
        font-size: 12px;
        color: #cccccc;
      }
      .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
      }
      h1 {
        font-size: 46px;
        font-style: normal;
        font-weight: bold;
        line-height: 120%;
        color: #333333;
      }
      h2 {
        font-size: 26px;
        font-style: normal;
        font-weight: bold;
        line-height: 120%;
        color: #333333;
      }
      h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        line-height: 120%;
        color: #333333;
      }
      h4 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #333333;
      }
      h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #333333;
      }
      h6 {
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #333333;
      }
      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 46px;
      }
      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 26px;
      }
      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px;
      }
      .es-header-body h4 a,
      .es-content-body h4 a,
      .es-footer-body h4 a {
        font-size: 24px;
      }
      .es-header-body h5 a,
      .es-content-body h5 a,
      .es-footer-body h5 a {
        font-size: 20px;
      }
      .es-header-body h6 a,
      .es-content-body h6 a,
      .es-footer-body h6 a {
        font-size: 16px;
      }
      a.es-button,
      button.es-button {
        padding: 10px 30px 10px 30px;
        display: inline-block;
        background: #5c68e2;
        border-radius: 5px 5px 5px 5px;
        font-size: 20px;
        font-family: arial, "helvetica neue", helvetica, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
        letter-spacing: 0;
      }
      .es-button-border {
        border-style: solid;
        border-color: #2cb543 #2cb543 #2cb543 #2cb543;
        background: #5c68e2;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 5px 5px 5px 5px;
        width: auto;
      }
      .es-button img {
        display: inline-block;
        vertical-align: middle;
      }
      .es-fw,
      .es-fw .es-button {
        display: block;
      }
      .es-il,
      .es-il .es-button {
        display: inline-block;
      }
      .es-text-rtl h1,
      .es-text-rtl h2,
      .es-text-rtl h3,
      .es-text-rtl h4,
      .es-text-rtl h5,
      .es-text-rtl h6,
      .es-text-rtl input,
      .es-text-rtl label,
      .es-text-rtl textarea,
      .es-text-rtl p,
      .es-text-rtl ol,
      .es-text-rtl ul,
      .es-text-rtl .es-menu a,
      .es-text-rtl .es-table {
        direction: rtl;
      }
      .es-text-ltr h1,
      .es-text-ltr h2,
      .es-text-ltr h3,
      .es-text-ltr h4,
      .es-text-ltr h5,
      .es-text-ltr h6,
      .es-text-ltr input,
      .es-text-ltr label,
      .es-text-ltr textarea,
      .es-text-ltr p,
      .es-text-ltr ol,
      .es-text-ltr ul,
      .es-text-ltr .es-menu a,
      .es-text-ltr .es-table {
        direction: ltr;
      }
      .es-text-rtl ol,
      .es-text-rtl ul {
        padding: 0px 40px 0px 0px;
      }
      .es-text-ltr ul,
      .es-text-ltr ol {
        padding: 0px 0px 0px 40px;
      }
      .es-p15t {
        padding-top: 15px;
      }
      .es-p20r {
        padding-right: 20px;
      }
      .es-p20l {
        padding-left: 20px;
      }
      .es-p10t {
        padding-top: 10px;
      }
      .es-p10b {
        padding-bottom: 10px;
      }
      .es-p20 {
        padding: 20px;
      }
      .es-p5t {
        padding-top: 5px;
      }
      .es-p40r {
        padding-right: 40px;
      }
      .es-p5b {
        padding-bottom: 5px;
      }
      .es-p40l {
        padding-left: 40px;
      }
      .es-p15b {
        padding-bottom: 15px;
      }
      .es-p20b {
        padding-bottom: 20px;
      }
      .es-p20t {
        padding-top: 20px;
      }
      .es-p-default {
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 0px;
        padding-left: 20px;
      }
      .es-menu amp-img,
      .es-button amp-img {
        vertical-align: middle;
      }
      @media only screen and (max-width: 600px) {
        td.es-m-p0r {
          padding-right: 0px;
        }
        td.es-m-p0l {
          padding-left: 0px;
        }
        td.es-m-p20b {
          padding-bottom: 20px;
        }
        *[class="gmail-fix"] {
          display: none;
        }
        p,
        a {
          line-height: 150%;
        }
        h1,
        h1 a {
          line-height: 120%;
        }
        h2,
        h2 a {
          line-height: 120%;
        }
        h3,
        h3 a {
          line-height: 120%;
        }
        h4,
        h4 a {
          line-height: 120%;
        }
        h5,
        h5 a {
          line-height: 120%;
        }
        h6,
        h6 a {
          line-height: 120%;
        }
        h1 {
          font-size: 36px;
          text-align: left;
        }
        h2 {
          font-size: 26px;
          text-align: left;
        }
        h3 {
          font-size: 20px;
          text-align: left;
        }
        h4 {
          font-size: 24px;
          text-align: left;
        }
        h5 {
          font-size: 20px;
          text-align: left;
        }
        h6 {
          font-size: 16px;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 36px;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px;
        }
        .es-menu td a {
          font-size: 12px;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left;
        }
        .es-m-txt-r amp-img {
          float: right;
        }
        .es-m-txt-c amp-img {
          margin: 0 auto;
        }
        .es-m-txt-l amp-img {
          float: left;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0;
          font-size: 0;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 20px;
          line-height: 120%;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: inline-block;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100%;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100%;
          max-width: 600px;
        }
        .adapt-img {
          width: 100%;
          height: auto;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none;
        }
        .es-desk-hidden {
          width: auto;
          overflow: visible;
          float: none;
          max-height: inherit;
          line-height: inherit;
        }
        tr.es-desk-hidden {
          display: table-row;
        }
        table.es-desk-hidden {
          display: table;
        }
        td.es-desk-menu-hidden {
          display: table-cell;
        }
        .es-menu td {
          width: 1%;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto;
        }
      }
    </style>
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color" lang="EN">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td valign="top">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
            >
              <tr>
                <td align="center">
                  <table
                    bgcolor="#ffffff"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    width="600"
                  >
                    <tr>
                      <td class="es-p15t es-p20r es-p20l" align="left">
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="560" align="center" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-p10t es-p10b"
                                    style="font-size: 0px"
                                  >
                                    <amp-img
                                      src="${process.env.PORT}/images/logo.png"
                                      alt=""
                                      style="display: block"
                                      width="220"
                                      class="adapt-img"
                                      height="135"
                                      layout="responsive"
                                    ></amp-img>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" class="es-p10b es-m-txt-c">
                                    <h1
                                      style="font-size: 46px; line-height: 46px"
                                    >
                                      Order confirmation
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
            >
              <tr>
                <td align="center">
                  <table
                    bgcolor="#ffffff"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    width="600"
                  >
                    <tr>
                      <td class="es-p20" align="left">
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="560" align="center" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="center" class="es-m-txt-c">
                                    <h2 style="color: #3075a6">
                                      Order&nbsp;<a
                                        target="_blank"
                                        style="color: #3075a6"
                                        >${orderDetail.orderNumber}</a
                                      >
                                    </h2>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l"
                                  >
                                    <p>${orderDetail.orderedOn}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-p5t es-p15b es-p40r es-p40l es-m-p0r es-m-p0l"
                                  >
                                    <p>
                                      This website is demo website for my
                                      portfolio.
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-radius: 6px;
                                        border-color: #3075a6;
                                        border-width: 2px;
                                        background: #3075a6;
                                      "
                                      ><a
                                        href=${process.env.TRACK_LINK}
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          border-left-width: 30px;
                                          border-right-width: 30px;
                                          border-radius: 6px;
                                          background: #3075a6;
                                        "
                                        >TRACK ORDER STATUS</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="es-p10t es-p10b es-p20r es-p20l esdev-adapt-off"
                        align="left"
                      >
                        <table
                          width="560"
                          cellpadding="0"
                          cellspacing="0"
                          class="esdev-mso-table"
                        >
                          ${products.map(
                            (product) => `<tr>
                            <td class="esdev-mso-td" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                              >
                                <tr>
                                  <td
                                    width="58"
                                    class="es-m-p0r"
                                    align="center"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          style="font-size: 0px"
                                        >
                                        <img class="adapt-img"
                                            style="display: block"
                                            width="50"
                                            height="50"
                                            layout="responsive" src=${
                                              product.image
                                            } alt=${product.title} />
                                          
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td width="20" class="es-m-w0"></td>
                            <td class="esdev-mso-td" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                              >
                                <tr>
                                  <td width="215" align="center">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td align="left">
                                          <p><strong>${
                                            product.title
                                          }</strong></p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" class="es-p5t">
                                          <p>${product.category}</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td width="20" class="es-m-w0"></td>
                            <td class="esdev-mso-td" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                              >
                                <tr>
                                  <td width="79" align="left">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td align="left"><p>$${
                                          product.price
                                        }</p></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td width="20" class="es-m-w0"></td>
                            <td class="esdev-mso-td" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                              >
                                <tr>
                                  <td width="48" align="left">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td align="center"><p>
                                        ${product.quantity}
                                        
                                        </p></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td width="20" class="es-m-w0"></td>
                            <td class="esdev-mso-td" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                              >
                                <tr>
                                  <td width="82" align="left">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td align="right"><p>$${
                                          product.quantity * product.price
                                        }</p></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>`
                          )}
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="es-p10t es-p20r es-p20l" align="left">
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="560" class="es-m-p0r" align="center">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  border-top: 2px solid #efefef;
                                  border-bottom: 2px solid #efefef;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    class="es-m-txt-r es-p10t es-p20b"
                                  >
                                    <p>
                                    Subtotal:&nbsp;<strong> $${
                                      orderDetail.price
                                    }</strong><br />
                                    Shipping:&nbsp;<strong> $${
                                      orderDetail.shippingMethod === "standard"
                                        ? "00"
                                        : "$20"
                                    }</strong><br />
                                     Total:&nbsp;<strong> $${
                                       orderDetail.shippingMethod === "standard"
                                         ? orderDetail.price
                                         : orderDetail.price + 20
                                     }</strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="es-p20t es-p10b es-p20r es-p20l" align="left">
                        <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                        >
                          <tr>
                            <td
                              width="280"
                              class="es-m-p0r es-m-p20b"
                              align="center"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left">
                                    <p>
                                      Customer:
                                      <strong>${orderDetail.email}</strong>
                                    </p>
                                    <p>
                                      Order number:&nbsp;<strong
                                        >${orderDetail.orderNumber}</strong
                                      >
                                    </p>
                                    <p>
                                      Invoice date:&nbsp;<strong
                                        >${orderDetail.orderedOn}</strong
                                      >
                                    </p>
                                    <p>
                                      Payment method:&nbsp;<strong
                                        >${
                                          orderDetail.payment === "cash"
                                            ? orderDetail.payment
                                            : `${orderDetail.payment} ,${orderDetail.onlineMethod}`
                                        }</strong
                                      >
                                    </p>
                                    <p>Currency:&nbsp;<strong>USD</strong></p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td width="0"></td><td width="280" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                        >
                          <tr>
                            <td width="280" class="es-m-p0r" align="center">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left" class="es-m-txt-l">
                                    <p>
                                      Shipping Method:
                                      <strong>${
                                        orderDetail.shippingMethod
                                      }</strong>
                                    </p>
                                    <p>Shipping address:
                                    
                                    <p>
                                      <strong
                                        >
                                        ${orderDetail.address}
                                    <br /> ${orderDetail.area}, ${
    orderDetail.zip
  }
                                    <br /> ${orderDetail.city}</p>
                                        </strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td class="es-p15t es-p10b es-p20r es-p20l" align="left">
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="560" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="center" class="es-p10t es-p10b">
                                    <p>
                                      If you like to work with me. Contact at
                                      <a
                                        target="_blank"
                                        href="mailto:Sheharyarali689@gmail.com"
                                        >Sheharyarali689@gmail.com</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
};
