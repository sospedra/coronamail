export const getTemplate = () => `
doctype true
head
  //if gte mso 9
    xml
      o:officedocumentsettings
        o:allowpng
          o:pixelsperinch 96
  meta(content='text/html; charset=utf-8' http-equiv='Content-Type')
  meta(content='width=device-width' name='viewport')
  // [if !mso] <!
  meta(content='IE=edge' http-equiv='X-UA-Compatible')
  // <![endif]
  title
  // [if !mso] <!
  // <![endif]
  style(type='text/css').
    body {
    margin: 0;
    padding: 0;
    }
    table,
    td,
    tr {
    vertical-align: top;
    border-collapse: collapse;
    }
    * {
    line-height: inherit;
    }
    a[x-apple-data-detectors=true] {
    color: inherit !important;
    text-decoration: none !important;
    }
  style#media-query(type='text/css').
    @media (max-width: 660px) {
    .block-grid,
    .col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
    }
    .block-grid {
    width: 100% !important;
    }
    .col {
    width: 100% !important;
    }
    .col>div {
    margin: 0 auto;
    }
    img.fullwidth,
    img.fullwidthOnMobile {
    max-width: 100% !important;
    }
    .no-stack .col {
    min-width: 0 !important;
    display: table-cell !important;
    }
    .no-stack.two-up .col {
    width: 50% !important;
    }
    .no-stack .col.num4 {
    width: 33% !important;
    }
    .no-stack .col.num8 {
    width: 66% !important;
    }
    .no-stack .col.num4 {
    width: 33% !important;
    }
    .no-stack .col.num3 {
    width: 25% !important;
    }
    .no-stack .col.num6 {
    width: 50% !important;
    }
    .no-stack .col.num9 {
    width: 75% !important;
    }
    .video-block {
    max-width: none !important;
    }
    .mobile_hide {
    min-height: 0px;
    max-height: 0px;
    max-width: 0px;
    display: none;
    overflow: hidden;
    font-size: 0px;
    }
    .desktop_hide {
    display: block !important;
    max-height: none !important;
    }
    }
//if IE
  .ie-browser
table.nl-container(bgcolor='#ffffff' cellpadding='0' cellspacing='0' role='presentation' style='table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 100%;' valign='top' width='100%')
  tbody
    tr(style='vertical-align: top;' valign='top')
      td(style='word-break: break-word; vertical-align: top;' valign='top')
        //if (mso)|(IE)
          table(width='100%' cellpadding='0' cellspacing='0' border='0')
            tr
              td(align='center' style='background-color:#ffffff')
        div(style='background-color:#ffffff;')
          .block-grid(style='Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;')
            div(style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;')
              //if (mso)|(IE)
                table(width='100%' cellpadding='0' cellspacing='0' border='0' style='background-color:#ffffff;')
                  tr
                    td(align='center')
                      table(cellpadding='0' cellspacing='0' border='0' style='width:640px')
                        tr.layout-full-width(style='background-color:#ffffff')
              //if (mso)|(IE)
                td(align='center' width='640' style='background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;' valign='top')
                  table(width='100%' cellpadding='0' cellspacing='0' border='0')
                    tr
                      td(style='padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;')
              .col.num12(style='min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;')
                div(style='width:100% !important;')
                  // [if (!mso)&(!IE)] <!
                  div(style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;')
                    // <![endif]
                    .mobile_hide
                      table.divider(border='0' cellpadding='0' cellspacing='0' role='presentation' style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;' valign='top' width='100%')
                        tbody
                          tr(style='vertical-align: top;' valign='top')
                            td.divider_inner(style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;' valign='top')
                              table.divider_content(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 30px solid #FFFFFF; width: 100%;' valign='top' width='100%')
                                tbody
                                  tr(style='vertical-align: top;' valign='top')
                                    td(style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;' valign='top')
                                      span
                    // [if (!mso)&(!IE)] <!
                  // <![endif]
              //if (mso)|(IE)
              //if (mso)|(IE)
        div(style='background-color:#ffffff;')
          .block-grid(style='Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;')
            div(style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;')
              //if (mso)|(IE)
                table(width='100%' cellpadding='0' cellspacing='0' border='0' style='background-color:#ffffff;')
                  tr
                    td(align='center')
                      table(cellpadding='0' cellspacing='0' border='0' style='width:640px')
                        tr.layout-full-width(style='background-color:#ffffff')
              //if (mso)|(IE)
                td(align='center' width='640' style='background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;' valign='top')
                  table(width='100%' cellpadding='0' cellspacing='0' border='0')
                    tr
                      td(style='padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:0px;')
              .col.num12(style='min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;')
                div(style='width:100% !important;')
                  // [if (!mso)&(!IE)] <!
                  div(style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;')
                    // <![endif]
                    //if mso
                      table(width='100%' cellpadding='0' cellspacing='0' border='0')
                        tr
                          td(style='padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Georgia, serif')
                    div(style='color:#555555;font-family:Georgia, Times, serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;')
                      div(style='line-height: 1.2; font-size: 12px; font-family: Georgia, Times, serif; color: #555555; mso-line-height-alt: 14px;')
                        p(style='font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Georgia, Times, serif; mso-line-height-alt: 19px; margin: 0;')
                          span(style='color: #667eea;')
                            strong CoronaMail
                          span(style='color: #004afd;')
                            strong
                              br
                    //if mso
                    //if mso
                      table(width='100%' cellpadding='0' cellspacing='0' border='0')
                        tr
                          td(style='padding-right: 38px; padding-left: 38px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif')
                    div(style='color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:38px;padding-bottom:10px;padding-left:38px;')
                      div(style='line-height: 1.5; font-size: 12px; color: #555555; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;')
                        p(style='line-height: 1.5; word-break: break-word; text-align: center; font-size: 14px; mso-line-height-alt: 21px; margin: 0;')
                          span(style='font-size: 14px; color: #000000;') #{body0}
                        p(style='line-height: 1.5; word-break: break-word; text-align: center; font-size: 14px; mso-line-height-alt: 21px; margin: 0;')
                          span(style='font-size: 14px; color: #000000;') #{body1}
                          span(style='font-size: 14px;') #{to}
                        p(style='line-height: 1.5; word-break: break-word; text-align: center; font-size: 14px; mso-line-height-alt: 21px; margin: 0;')
                          span(style='font-size: 14px; color: #000000;')
                            | #{body2}
                            br
                        p(style='line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;') &nbsp;
                    //if mso
                    .button-container(align='center' style='padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;')
                      //if mso
                        table(width='100%' cellpadding='0' cellspacing='0' border='0' style='border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;')
                          tr
                            td(style='padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px' align='center')
                              v:roundrect(xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word' href='' style='height:45pt; width:219pt; v-text-anchor:middle;' arcsize='100%' stroke='false' fillcolor='#f56565')
                                w:anchorlock
                                  v:textbox(inset='0,0,0,0')
                                    center(style='color:#ffffff; font-family:Arial, sans-serif; font-size:16px')
                      a(href=\`\${url}\` style='text-decoration:none;display:inline-block;color:#ffffff;background-color:#f56565;border-radius:60px;-webkit-border-radius:60px;-moz-border-radius:60px;width:auto; width:auto;;border-top:1px solid #f56565;border-right:1px solid #f56565;border-bottom:1px solid #f56565;border-left:1px solid #f56565;padding-top:12px;padding-bottom:16px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;')
                        span(style='padding-left:32px;padding-right:32px;font-size:16px;display:inline-block;')
                          span(style='font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;')
                            strong #{cta}
                      //if mso
                    //if mso
                      table(width='100%' cellpadding='0' cellspacing='0' border='0')
                        tr
                          td(style='padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif')
                    div(style='color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;')
                      div(style='line-height: 1.2; font-size: 12px; color: #555555; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px;')
                        p(style='text-align: center; line-height: 1.2; word-break: break-word; font-size: 11px; mso-line-height-alt: 13px; margin: 0;')
                          span(style='font-size: 11px;')
                            em
                              | (
                              span(style='color: #667eea;')
                                a(href=\`\${url}\` style='text-decoration: underline; color: #667eea;') #{url}
                              | )
                    //if mso
                    .img-container.center.autowidth(align='center' style='padding-right: 0px;padding-left: 0px;')
                      //if mso
                        table(width='100%' cellpadding='0' cellspacing='0' border='0')
                          tr(style='line-height:0px')
                            td(style='padding-right: 0px;padding-left: 0px;' align='center')
                      a(href='#' style='cursor: unset;')
                        img.center.autowidth(align='center' alt='email illustration' border='0' src=\`\${illustration}\` style='text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 640px; display: block;' title='email illustration' width='640')
                      //if mso
                    // [if (!mso)&(!IE)] <!
                  // <![endif]
              //if (mso)|(IE)
              //if (mso)|(IE)
        div(style='background-color:#ffffff;')
          .block-grid(style='Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;')
            div(style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;')
              //if (mso)|(IE)
                table(width='100%' cellpadding='0' cellspacing='0' border='0' style='background-color:#ffffff;')
                  tr
                    td(align='center')
                      table(cellpadding='0' cellspacing='0' border='0' style='width:640px')
                        tr.layout-full-width(style='background-color:#ffffff')
              //if (mso)|(IE)
                td(align='center' width='640' style='background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;' valign='top')
                  table(width='100%' cellpadding='0' cellspacing='0' border='0')
                    tr
                      td(style='padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;')
              .col.num12(style='min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;')
                div(style='width:100% !important;')
                  // [if (!mso)&(!IE)] <!
                  div(style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;')
                    // <![endif]
                    //if mso
                      table(width='100%' cellpadding='0' cellspacing='0' border='0')
                        tr
                          td(style='padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif')
                    div(style='color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;')
                      div(style='font-size: 14px; line-height: 1.2; color: #555555; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 17px;')
                        p(style='line-height: 1.2; word-break: break-word; text-align: center; font-size: 11px; mso-line-height-alt: 13px; margin: 0;')
                          span(style='font-size: 11px;') #{footer0}
                        p(style='line-height: 1.2; word-break: break-word; text-align: center; font-size: 11px; mso-line-height-alt: 13px; margin: 0;')
                          span(style='font-size: 11px;') #{footer1}
                    //if mso
                    // [if (!mso)&(!IE)] <!
                  // <![endif]
              //if (mso)|(IE)
              //if (mso)|(IE)
        div(style='background-color:#ffffff;')
          .block-grid(style='Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #fff;')
            div(style='border-collapse: collapse;display: table;width: 100%;background-color:#fff;')
              //if (mso)|(IE)
                table(width='100%' cellpadding='0' cellspacing='0' border='0' style='background-color:#ffffff;')
                  tr
                    td(align='center')
                      table(cellpadding='0' cellspacing='0' border='0' style='width:640px')
                        tr.layout-full-width(style='background-color:#fff')
              //if (mso)|(IE)
                td(align='center' width='640' style='background-color:#fff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;' valign='top')
                  table(width='100%' cellpadding='0' cellspacing='0' border='0')
                    tr
                      td(style='padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;')
              .col.num12(style='min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;')
                div(style='width:100% !important;')
                  // [if (!mso)&(!IE)] <!
                  div(style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;')
                    // <![endif]
                    .mobile_hide
                      table.divider(border='0' cellpadding='0' cellspacing='0' role='presentation' style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;' valign='top' width='100%')
                        tbody
                          tr(style='vertical-align: top;' valign='top')
                            td.divider_inner(style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;' valign='top')
                              table.divider_content(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 30px solid #FFFFFF; width: 100%;' valign='top' width='100%')
                                tbody
                                  tr(style='vertical-align: top;' valign='top')
                                    td(style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;' valign='top')
                                      span
                    // [if (!mso)&(!IE)] <!
                  // <![endif]
              //if (mso)|(IE)
              //if (mso)|(IE)
        //if (mso)|(IE)
//if (IE)

`
