// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//$(document).ready(function() {
//alert('hiii');
// confirm('This is confirm');
//});
jQuery(document).ready(function() {
//alert('hii');
  jQuery('#dialog').dialog({
        title: 'Delete Facebook Account',
        dialogClass: 'alert',
        autoOpen: false,
        resizable: false,
        height: 170,
        width: 400,
        modal: true,
        open: function() {
            // scrollbar fix for IE
            jQuery('body').css('overflow','hidden');
        },
        close: function() {
            jQuery('body').css('overflow','visible');
        },
        buttons: {
            "Keep Contacts": function() {
                jQuery(this).dialog("close");
            },
            "Remove Contacts": function() {
                jQuery(this).dialog("close");
            }
        }
    });
 jQuery('#dial').click( function() {
// alert('click');
    jQuery('#dialog').dialog('open');
//    jQuery(".ui-dialog-titlebar").hide();
 });
//  alert('bye');
});

