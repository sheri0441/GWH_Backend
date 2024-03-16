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
    paymentStatus: String;
    price: number;
    isRegisteredUser: Boolean;
    orderedOn: Date;
  },
  products: Array<OrderProduct>
) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Confirmation</title>
    <style type="text/css" emogrify="no">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      table td {
        border-collapse: collapse;
        mso-line-height-rule: exactly;
      }
      .editable.image {
        font-size: 0 !important;
        line-height: 0 !important;
      }
      .nl2go_preheader {
        display: none !important;
        mso-hide: all !important;
        mso-line-height-rule: exactly;
        visibility: hidden !important;
        line-height: 0px !important;
        font-size: 0px !important;
      }
      body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0;
        padding: 0;
      }
      img {
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      a img {
        border: none;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      th {
        font-weight: normal;
        text-align: left;
      }
      *[class="gmail-fix"] {
        display: none !important;
      }
    </style>
    <style type="text/css" emogrify="no">
      @media (max-width: 600px) {
        .gmx-killpill {
          content: '\x03';
        }
      }
    </style>
    <style type="text/css" emogrify="no">
      @media (max-width: 600px) {
        .gmx-killpill {
          content:'0o3';
        }
        .r0-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          width: 100% !important;
        }
        .r1-i {
          background-color: transparent !important;
        }
        .r2-c {
          box-sizing: border-box !important;
          text-align: center !important;
          valign: top !important;
          width: 320px !important;
        }
        .r3-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          width: 320px !important;
        }
        .r4-i {
          padding-bottom: 5px !important;
          padding-top: 5px !important;
        }
        .r5-c {
          box-sizing: border-box !important;
          display: block !important;
          valign: top !important;
          width: 100% !important;
        }
        .r6-o {
          border-style: solid !important;
          width: 100% !important;
        }
        .r7-i {
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-top: 20px !important;
          text-align: center !important;
        }
        .r8-i {
          background-color: #3075a6 !important;
        }
        .r9-c {
          box-sizing: border-box !important;
          text-align: center !important;
          valign: top !important;
          width: 100% !important;
        }
        .r10-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          margin-bottom: 11px !important;
          width: 100% !important;
        }
        .r11-i {
          background-color: #ffffff !important;
          padding-bottom: 0px !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 0px !important;
        }
        .r12-i {
          background-color: #3075a6 !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .r13-i {
          background-color: #ffffff !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 76px !important;
        }
        .r14-o {
          border-style: solid !important;
          margin: 0 auto 0 0 !important;
          margin-bottom: 0px !important;
          margin-top: 0px !important;
          width: 100% !important;
        }
        .r15-i {
          text-align: left !important;
        }
        .r16-o {
          border-style: solid !important;
          margin: 0 auto 0 0 !important;
          width: 100% !important;
        }
        .r17-i {
          padding-top: 15px !important;
          text-align: left !important;
        }
        .r18-i {
          background-color: #ffffff !important;
          padding-bottom: 70px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 45px !important;
        }
        .r19-i {
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .r20-c {
          box-sizing: border-box !important;
          padding-top: 10px !important;
          text-align: left !important;
          valign: top !important;
          width: 100% !important;
        }
        .r21-c {
          box-sizing: border-box !important;
          padding: 0 !important;
          text-align: left !important;
          valign: top !important;
          width: 100% !important;
        }
        .r22-o {
          border-style: solid !important;
          margin: 0 auto 0 0 !important;
          margin-top: 40px !important;
          width: 100% !important;
        }
        .r23-i {
          padding: 0 !important;
          text-align: center !important;
        }
        .r24-r {
          background-color: #121212 !important;
          border-color: #3075a6 !important;
          border-radius: 0px !important;
          border-width: 0px !important;
          box-sizing: border-box;
          height: initial !important;
          padding: 0 !important;
          padding-bottom: 14px !important;
          padding-left: 5px !important;
          padding-right: 5px !important;
          padding-top: 13px !important;
          text-align: center !important;
          width: 100% !important;
        }
        .r25-o {
          border-style: solid !important;
          margin: 0 auto 0 0 !important;
          margin-top: 20px !important;
          width: 100% !important;
        }
        .r26-r {
          background-color: #ffffff !important;
          border-color: #75ebef !important;
          border-radius: 0px !important;
          border-width: 2px !important;
          box-sizing: border-box;
          height: initial !important;
          padding: 0 !important;
          padding-bottom: 12px !important;
          padding-left: 5px !important;
          padding-right: 5px !important;
          padding-top: 12px !important;
          text-align: center !important;
          width: 100% !important;
        }
        .r27-o {
          border-style: solid !important;
          margin: 0 0 0 auto !important;
          width: 100% !important;
        }
        .r28-i {
          padding-top: 30px !important;
        }
        .r29-i {
          background-color: #404049 !important;
          padding-bottom: 30px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 30px !important;
        }
        .r30-i {
          padding-top: 20px !important;
          text-align: left !important;
        }
        .r31-i {
          background-color: #ffffff !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-top: 57px !important;
        }
        .r32-c {
          box-sizing: border-box !important;
          text-align: center !important;
          valign: top !important;
          width: 124px !important;
        }
        .r33-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          width: 124px !important;
        }
        .r34-i {
          padding-top: 30px !important;
          text-align: center !important;
        }
        .r35-i {
          padding-top: 6px !important;
          text-align: center !important;
        }
        .r36-i {
          padding-top: 20px !important;
          text-align: center !important;
        }
        .r37-i {
          background-color: #ffffff !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-top: 30px !important;
        }
        .r38-i {
          background-color: #ffffff !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 30px !important;
        }
        .r39-i {
          background-color: #ffffff !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 11px !important;
        }
        .r40-c {
          box-sizing: border-box !important;
          valign: top !important;
          width: 50% !important;
        }
        .r41-i {
          text-align: right !important;
        }
        .r42-i {
          background-color: #ffffff !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 9px !important;
        }
        .r43-i {
          background-color: #ffffff !important;
          padding-bottom: 55px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 15px !important;
        }
        .r44-i {
          background-color: #121212 !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 48px !important;
        }
        .r45-o {
          background-size: cover !important;
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          width: 100% !important;
        }
        .r46-i {
          background-color: #121212 !important;
          padding-bottom: 45px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 23px !important;
        }
        .r47-i {
          padding-top: 5px !important;
          text-align: left !important;
        }
        body {
          -webkit-text-size-adjust: none;
        }
        .nl2go-responsive-hide {
          display: none;
        }
        .nl2go-body-table {
          min-width: unset !important;
        }
        .mobshow {
          height: auto !important;
          overflow: visible !important;
          max-height: unset !important;
          visibility: visible !important;
          border: none !important;
        }
        .resp-table {
          display: inline-table !important;
        }
        .magic-resp {
          display: table-cell !important;
        }
      }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css" emogrify="no">
      @import url("https://fonts.googleapis.com/css2?family=Montserrat");
      @import url("https://fonts.googleapis.com/css2?family=S");
    </style>
    <!--<![endif]-->
    <style type="text/css">
      p,
      h1,
      h2,
      h3,
      h4,
      ol,
      ul,
      li {
        margin: 0;
      }
      a,
      a:link {
        color: #3075a6;
        text-decoration: none;
      }
      .nl2go-default-textstyle {
        color: #3b3f44;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.2;
        word-break: break-word;
      }
      .default-button {
        color: #ffffff;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: 1.15;
        text-decoration: none;
        word-break: break-word;
      }
      .sib_class_16_white_roboto {
        color: #ffffff;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        word-break: break-word;
      }
      .sib_class_16_black {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        word-break: break-word;
      }
      .sib_class_16_white {
        color: #ffffff;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        word-break: break-word;
      }
      .sib_class_16_black_sb {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        font-weight: 600;
        word-break: break-word;
      }
      .sib_class_16_black_b {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 16px;
        font-weight: 700;
        word-break: break-word;
      }
      .sib_class_18_black_sb {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 18px;
        font-weight: 600;
        word-break: break-word;
      }
      .sib_class_18_blue_sb {
        color: #75ebef;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 18px;
        font-weight: 600;
        word-break: break-word;
      }
      .sib_class_20_black_roboto {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 20px;
        word-break: break-word;
      }
      .sib_class_20_black_b {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 20px;
        font-weight: 700;
        word-break: break-word;
      }
      .sib_class_20_black_b_ul {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 20px;
        font-weight: 700;
        text-decoration: underline;
        word-break: break-word;
      }
      .sib_class_20_white_b_ul {
        color: #ffffff;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 20px;
        font-weight: 700;
        text-decoration: underline;
        word-break: break-word;
      }
      .sib_class_24_black_b {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 24px;
        font-weight: 700;
        word-break: break-word;
      }
      .sib_class_30_black_sb {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 30px;
        font-weight: 600;
        word-break: break-word;
      }
      .default-heading1 {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 30px;
        word-break: break-word;
      }
      .default-heading2 {
        color: #ffffff;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 20px;
        word-break: break-word;
      }
      .default-heading3 {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 20px;
        word-break: break-word;
      }
      .default-heading4 {
        color: #000000;
        font-family: Montserrat, arial, helvetica, sans-serif;
        font-size: 18px;
        word-break: break-word;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .no-show-for-you {
        border: none;
        display: none;
        float: none;
        font-size: 0;
        height: 0;
        line-height: 0;
        max-height: 0;
        mso-hide: all;
        overflow: hidden;
        table-layout: fixed;
        visibility: hidden;
        width: 0;
      }
    </style>
    <!--[if mso
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml><!
    [endif]-->
    <style type="text/css">
      a:link {
        color: #3075a6;
        text-decoration: none;
      }
    </style>
  </head>
  <body
    bgcolor="#3075a6"
    text="#3b3f44"
    link="#3075a6"
    yahoo="fix"
    style="background-color: #3075a6; margin-bottom: 10px"
  >
    <table
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      class="nl2go-body-table"
      width="100%"
      style="background-color: #3075a6; width: 100%"
    >
      <tr>
        <td>
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            role="presentation"
            width="100%"
            align="center"
            class="r0-o"
            style="table-layout: fixed; width: 100%"
          >
            <tr>
              <td
                valign="top"
                class="r1-i"
                style="background-color: transparent"
              >
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="600"
                  align="center"
                  class="r3-o"
                  style="table-layout: fixed"
                >
                  <tr>
                    <td
                      class="r4-i"
                      style="padding-bottom: 5px; padding-top: 5px"
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="center"
                              class="r0-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="center"
                                  class="r7-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-left: 30px;
                                    padding-right: 30px;
                                    padding-top: 20px;
                                    text-align: center;
                                  "
                                >
                                  <div>
                                    <p style="margin: 0"></p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            role="presentation"
            width="600"
            align="center"
            class="r3-o"
            style="table-layout: fixed; width: 600px"
          >
            <tr>
              <td valign="top" class="r8-i" style="background-color: #3075a6">
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r10-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td class="r11-i" style="background-color: #ffffff">
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="
                              background-color: #3075a6;
                              font-weight: normal;
                            "
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  valign="top"
                                  class="r12-i"
                                  style="
                                    background-color: #3075a6;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r9-c" align="center">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="200"
                                          class="r0-o"
                                          style="
                                            table-layout: fixed;
                                            width: 200px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              style="
                                                font-size: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <img
                                                src="https://img.mailinblue.com/5441515/images/content_library/original/65f2d044514a14974e0d7dfd.png"
                                                width="200"
                                                border="0"
                                                style="
                                                  display: block;
                                                  width: 100%;
                                                "
                                              />
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr class="nl2go-responsive-hide">
                    <td height="11" style="font-size: 11px; line-height: 11px">
                      ­
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r13-i"
                      style="
                        background-color: #ffffff;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 76px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r14-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r15-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <h1
                                      class="default-heading1"
                                      style="
                                        margin: 0;
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 30px;
                                        word-break: break-word;
                                      "
                                    >
                                      Thank you ${orderDetail.name},
                                    </h1>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r17-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 15px;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_20_black_roboto"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 20px;
                                        word-break: break-word;
                                      "
                                    >
                                      <span
                                        style="
                                          font-family: Söhne, ui-sans-serif,
                                            system-ui, -apple-system, Segoe UI,
                                            Roboto, Ubuntu, Cantarell, Noto Sans,
                                            sans-serif, Helvetica Neue, Arial,
                                            Apple Color Emoji, Segoe UI Emoji,
                                            Segoe UI Symbol, Noto Color Emoji;
                                        "
                                        >We sincerely appreciate your order and
                                        your trust in our services. Thank you
                                        for choosing us; we look forward to
                                        exceeding your expectations.</span
                                      >
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r18-i"
                      style="
                        background-color: #ffffff;
                        padding-bottom: 70px;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 45px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td valign="top" class="r19-i">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td
                                        class="r20-c nl2go-default-textstyle"
                                        align="left"
                                        style="
                                          color: #3b3f44;
                                          font-family: Montserrat, arial,
                                            helvetica, sans-serif;
                                          font-size: 16px;
                                          line-height: 1.2;
                                          word-break: break-word;
                                          padding-top: 10px;
                                          text-align: left;
                                          valign: top;
                                        "
                                      >
                                        <div>
                                          <div
                                            class="sib_class_16_black_sb"
                                            style="
                                              color: #000;
                                              font-family: Montserrat, arial,
                                                helvetica, sans-serif;
                                              font-size: 16px;
                                              font-weight: 600;
                                              word-break: break-word;
                                            "
                                          >
                                            Order No: ${orderDetail.orderNumber}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        class="r20-c nl2go-default-textstyle"
                                        align="left"
                                        style="
                                          color: #3b3f44;
                                          font-family: Montserrat, arial,
                                            helvetica, sans-serif;
                                          font-size: 16px;
                                          line-height: 1.2;
                                          word-break: break-word;
                                          padding-top: 10px;
                                          text-align: left;
                                          valign: top;
                                        "
                                      >
                                        <div>
                                          <div
                                            class="sib_class_16_black_sb"
                                            style="
                                              color: #000;
                                              font-family: Montserrat, arial,
                                                helvetica, sans-serif;
                                              font-size: 16px;
                                              font-weight: 600;
                                              word-break: break-word;
                                            "
                                          >
                                            Order date: ${orderDetail.orderedOn.getDate()}/${
    orderDetail.orderedOn.getMonth() + 1
  }/${orderDetail.orderedOn.getFullYear()}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        class="r21-c"
                                        align="left"
                                        style="
                                          align: left;
                                          padding-top: 40px;
                                          valign: top;
                                        "
                                      >
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="253"
                                          class="r22-o"
                                          style="
                                            background-color: #121212;
                                            border-collapse: separate;
                                            border-color: #3075a6;
                                            border-radius: 0px;
                                            border-style: solid;
                                            border-width: 0px;
                                            table-layout: fixed;
                                            width: 253px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              height="20"
                                              align="center"
                                              valign="top"
                                              class="r23-i nl2go-default-textstyle"
                                              style="
                                                font-family: Montserrat, arial,
                                                  helvetica, sans-serif;
                                                font-size: 16px;
                                                word-break: break-word;
                                                background-color: #121212;
                                                border-radius: 0px;
                                                color: #ffffff;
                                                font-style: normal;
                                                line-height: 1.15;
                                                padding-bottom: 14px;
                                                padding-left: 5px;
                                                padding-right: 5px;
                                                padding-top: 13px;
                                                text-align: center;
                                              "
                                            >
                                              <a
                                                href="${
                                                  process.env.FRONTEND_URL
                                                }/track/${
    orderDetail.orderNumber
  }"
                                                class="r24-r default-button"
                                                target="_blank"
                                                data-btn="1"
                                                style="
                                                  font-family: Montserrat, arial,
                                                    helvetica, sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  line-height: 1.15;
                                                  text-decoration: none;
                                                  word-break: break-word;
                                                  word-wrap: break-word;
                                                  display: block;
                                                  -webkit-text-size-adjust: none;
                                                  color: #ffffff;
                                                "
                                              >
                                                <span
                                                  class="sib_class_18_blue_sb"
                                                  style="
                                                    color: #75ebef;
                                                    font-family: Montserrat,
                                                      arial, helvetica,
                                                      sans-serif;
                                                    font-size: 18px;
                                                    font-weight: 600;
                                                    word-break: break-word;
                                                  "
                                                  ><span
                                                    >Track your order</span
                                                  ></span
                                                ></a
                                              >
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        class="r21-c"
                                        align="left"
                                        style="
                                          align: left;
                                          padding-top: 20px;
                                          valign: top;
                                        "
                                      >
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="253"
                                          class="r25-o"
                                          style="
                                            background-color: #ffffff;
                                            border-collapse: separate;
                                            border-color: #75ebef;
                                            border-radius: 0px;
                                            border-style: solid;
                                            border-width: 2px;
                                            table-layout: fixed;
                                            width: 253px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              height="20"
                                              align="center"
                                              valign="top"
                                              class="r23-i nl2go-default-textstyle"
                                              style="
                                                font-family: Montserrat, arial,
                                                  helvetica, sans-serif;
                                                font-size: 16px;
                                                word-break: break-word;
                                                background-color: #ffffff;
                                                border-radius: 0px;
                                                color: #ffffff;
                                                font-style: normal;
                                                line-height: 1.15;
                                                padding-bottom: 12px;
                                                padding-left: 5px;
                                                padding-right: 5px;
                                                padding-top: 12px;
                                                text-align: center;
                                              "
                                            >
                                              <a
                                                href="${
                                                  process.env.FRONTEND_URL
                                                }"
                                                class="r26-r default-button"
                                                target="_blank"
                                                data-btn="2"
                                                style="
                                                  font-family: Montserrat, arial,
                                                    helvetica, sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  line-height: 1.15;
                                                  text-decoration: none;
                                                  word-break: break-word;
                                                  word-wrap: break-word;
                                                  display: block;
                                                  -webkit-text-size-adjust: none;
                                                  color: #ffffff;
                                                "
                                              >
                                                <span
                                                  class="sib_class_18_black_sb"
                                                  style="
                                                    color: #000;
                                                    font-family: Montserrat,
                                                      arial, helvetica,
                                                      sans-serif;
                                                    font-size: 18px;
                                                    font-weight: 600;
                                                    word-break: break-word;
                                                  "
                                                  >Continue shopping</span
                                                ></a
                                              >
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="238"
                              align="right"
                              class="r27-o"
                              style="table-layout: fixed; width: 238px"
                            >
                              <tr>
                                <td
                                  class="r28-i"
                                  style="font-size: 0px; line-height: 0px"
                                >
                                  <img
                                    src="https://img.mailinblue.com/2670624/images/rnb/original/5fbe5418424c336384002ee7.png"
                                    width="238"
                                    border="0"
                                    style="display: block; width: 100%"
                                  />
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r29-i"
                      style="
                        background-color: #404049;
                        padding-bottom: 30px;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 30px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r15-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <h2
                                      class="default-heading2"
                                      style="
                                        margin: 0;
                                        color: #fff;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 20px;
                                        word-break: break-word;
                                      "
                                    >
                                      <u>Shipping address:</u>
                                    </h2>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r17-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 15px;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_white"
                                      style="
                                        color: #fff;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        word-break: break-word;
                                      "
                                    >
                                      ${orderDetail.name}<br />
                                      ${orderDetail.address}<br />
                                      ${orderDetail.area},${
    orderDetail.zip
  }<br />
                                      ${orderDetail.city}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r30-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <h2
                                      class="default-heading2"
                                      style="
                                        margin: 0;
                                        color: #fff;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 20px;
                                        word-break: break-word;
                                      "
                                    >
                                      <u>Bill info:</u>
                                    </h2>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r17-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 15px;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_white"
                                      style="
                                        color: #fff;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        word-break: break-word;
                                      "
                                    >
                                      ${orderDetail.payment}<br />
                                      ${orderDetail.paymentStatus}<br />
                                      ${orderDetail.shippingMethod}
                                      France
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                ${products.map((pro) => {
                  return `<table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r31-i"
                      style="
                        background-color: #ffffff;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 57px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="25%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td valign="top" class="r19-i">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r32-c" align="left">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="115"
                                          class="r33-o"
                                          style="
                                            table-layout: fixed;
                                            width: 115px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              style="
                                                font-size: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <img
                                                src="${pro.image}"
                                                width="115"
                                                border="0"
                                                style="
                                                  display: block;
                                                  width: 100%;
                                                "
                                              />
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r34-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <h3
                                      class="default-heading3"
                                      style="
                                        margin: 0;
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 20px;
                                        word-break: break-word;
                                      "
                                    >
                                      <u>${pro.title}</u>
                                    </h3>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r35-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 6px;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_black"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        word-break: break-word;
                                      "
                                    >
                                      ${pro.category}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r35-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 6px;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_black"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        word-break: break-word;
                                      "
                                    >
                                      ${pro.price}$
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="8.33%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r36-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 57px;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_18_black_sb"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 18px;
                                        font-weight: 600;
                                        word-break: break-word;
                                      "
                                    >
                                      x${pro.quantity}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="16.67%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="right"
                                  valign="top"
                                  class="r36-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    padding-top: 49px;
                                    text-align: right;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_24_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 24px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      ${pro.price * pro.quantity}$
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>`;
                })}
                
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r38-i"
                      style="
                        background-color: #ffffff;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 30px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="530"
                              align="center"
                              class="r0-o"
                              style="table-layout: fixed"
                            >
                              <tr>
                                <td class="" style="height: 2px">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td>
                                        <table
                                          width="100%"
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          height="2"
                                          style="
                                            border-top-style: solid;
                                            background-clip: border-box;
                                            border-top-color: #75ebef;
                                            border-top-width: 2px;
                                            font-size: 2px;
                                            line-height: 2px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              height="0"
                                              style="
                                                font-size: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              ­
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r39-i"
                      style="
                        background-color: #ffffff;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 11px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="50%"
                            valign="top"
                            class="r40-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r15-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      Subtotal
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r40-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="right"
                                  valign="top"
                                  class="r41-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: right;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      ${
                                        orderDetail.price -
                                        (orderDetail.shippingMethod ===
                                        "express"
                                          ? 20
                                          : 0)
                                      }$
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r39-i"
                      style="
                        background-color: #ffffff;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 11px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="50%"
                            valign="top"
                            class="r40-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r15-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      Shipping fee
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r40-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="right"
                                  valign="top"
                                  class="r41-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: right;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      ${
                                        orderDetail.shippingMethod === "express"
                                          ? 20
                                          : 0
                                      }$
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r42-i"
                      style="
                        background-color: #ffffff;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 9px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="530"
                              align="center"
                              class="r0-o"
                              style="table-layout: fixed"
                            >
                              <tr>
                                <td class="" style="height: 2px">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td>
                                        <table
                                          width="100%"
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          height="2"
                                          style="
                                            border-top-style: solid;
                                            background-clip: border-box;
                                            border-top-color: #75ebef;
                                            border-top-width: 2px;
                                            font-size: 2px;
                                            line-height: 2px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              height="0"
                                              style="
                                                font-size: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              ­
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r43-i"
                      style="
                        background-color: #ffffff;
                        padding-bottom: 55px;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 15px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="50%"
                            valign="top"
                            class="r40-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r15-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_20_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 20px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      TOTAL
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r40-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="right"
                                  valign="top"
                                  class="r41-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: right;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_24_black_b"
                                      style="
                                        color: #000;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 24px;
                                        font-weight: 700;
                                        word-break: break-word;
                                      "
                                    >
                                      ${orderDetail.price}$
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r0-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r44-i"
                      style="
                        background-color: #121212;
                        padding-left: 35px;
                        padding-right: 35px;
                        padding-top: 48px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r15-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    word-break: break-word;
                                    line-height: 1.3;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_white_roboto"
                                      style="
                                        color: #fff;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        word-break: break-word;
                                      "
                                    >
                                      This website is one of my portfolio
                                      projects.
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r45-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r46-i"
                      style="
                        background-color: #121212;
                        padding-bottom: 45px;
                        padding-left: 35px;
                        padding-right: 150px;
                        padding-top: 23px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="left"
                              class="r16-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  align="left"
                                  valign="top"
                                  class="r47-i nl2go-default-textstyle"
                                  style="
                                    color: #3b3f44;
                                    font-family: Montserrat, arial, helvetica,
                                      sans-serif;
                                    font-size: 16px;
                                    line-height: 1.2;
                                    word-break: break-word;
                                    text-align: left;
                                  "
                                >
                                  <div>
                                    <div
                                      class="sib_class_16_white_roboto"
                                      style="
                                        color: #fff;
                                        font-family: Montserrat, arial,
                                          helvetica, sans-serif;
                                        font-size: 16px;
                                        word-break: break-word;
                                      "
                                    >
                                      <a
                                        href="mailto:${
                                          process.env.PERSONAL_EMAIL
                                        }?subject=reply to confirmation"
                                        target="_blank"
                                        style="
                                          color: #3075a6;
                                          text-decoration: none;
                                        "
                                        >Contact me</a
                                      >
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
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
  </body>
</html>
`;
};
