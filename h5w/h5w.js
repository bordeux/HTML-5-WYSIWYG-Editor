/*****************************************************/
/******** Author: Krzysztof Bednarczyk   *************/
/******** License: LGPL                  *************/
/******** http://bordeux.NET             *************/
/******** Part of XVweb project          *************/
/******** html-5-wysiwyg.googlecode.com  *************/
/******** part: xvweb.googlecode.com     *************/
/*****************************************************/
(function (jQuery) {
		jQuery.fn.extend({
				h5w : function (options, val) {
					if (options == "destroy") {
						jQuery(this).trigger('h5w.destroy');
						return this;
					};
					if (options == "getContent") {
						return jQuery(this).find(".h5w-content").html();
					};
					var options = jQuery.extend({
							onStart : function (teadasd) {
								return true;
							}, 
							onChange : function () {
								return false;
							}, 
							onUseButtons : function () {
								return false;
							}, 
							onIconClick : function (icon) {
								
							}, 
							onLoad : function (icon) {
								
							}, 
							onTextarea : function (text) {
								
								return text;
							}, 
							onVisual : function (text) {
								
								return text;
							}, 
							onSelected : function (obj, jTarget, event) {
								
							}, 
							onUnSelected : function (obj, jTarget, event) {
								
							}, 
							content : "", 
							functions : {
								
							}, 
							
							contextMenu : {
								table : function () {
									//alert("return true")
								}
								
							}
							
						}, options);
					
					var DefineddContextMenu = {
						tableElement : function (ox,oy) {
							var hOContextMenu = $(".h5w-context-menu .h5w-c-options-element").html("");
							hOContextMenu.append(
								$("<li>").html(
									$("<a>").attr({
											"href" : "#", 
											"class" : "h5w-c-deleterow"
										}).text("Delete row").click(function () {
										if($(ox.target).is("tr")){
											$(ox.target).remove();
										}else{
												$(ox.target).parents("tr").remove();
											}
										})));
							hOContextMenu.append(
								$("<li>").html(
									$("<a>").attr({
											"href" : "#", 
											"class" : "h5w-c-deletecell"
										}).text("Delete cell").click(function () {
										if($(ox.target).is("td")){
											$(ox.target).remove();
										}
										})));
							
						}
					};
					var contextMenu = {
						tr : DefineddContextMenu.tableElement, 
						td : DefineddContextMenu.tableElement, 
						
					};
					var functions = jQuery.extend({
							italic : function (main, icon) {
								
								document.execCommand('italic', null, false);
								return true;
							}, 
							bold : function (main, icon) {
								document.execCommand('bold', null, false);
								return true;
							}, 
							fontsize : function (main, icon) {
								
								document.execCommand("fontSize", false, 1);
								toSizeFont = 12;
								if (typeof(main) == 'number') {
									toSizeFont = main;
								} else {
									toSizeFont = jQuery(icon).text();
								};
								jQuery(".h5w-content font[size]").removeAttr("size").css("font-size", toSizeFont + "px");
								return false;
							}, 
							underline : function (main, icon) {
								document.execCommand('underline', null, false);
								return true;
							}, 
							strike : function (main, icon) {
								document.execCommand('strikeThrough', null, false);
								return true;
							}, 
							subscript : function (main, icon) {;
								document.execCommand('subscript', null, false);
								return true;
							}, 
							superscript : function (main, icon) {
								document.execCommand('superscript', null, false);
								return true;
							}, 
							paragraph : function (main, icon) {
								document.execCommand('insertParagraph', null, false);
								return true;
							}, 
							listordered : function (main, icon) {
								document.execCommand('insertOrderedList', null, false);
								return true;
							}, 
							listunordered : function (main, icon) {
								document.execCommand('insertUnorderedList', null, false);
								return true;
							}, 
							inserthtml : function (main, icon) {
								document.execCommand('insertHTML', null, jQuery(icon).html());
								return true;
							}, 
							hrule : function (main, icon) {
								document.execCommand('insertHorizontalRule', null, false);
								return true;
							}, 
							redo : function (main, icon) {
								jQuery(main).find(".h5w-content").focus();
								if (!document.execCommand('redo', false, null)) {
									alert("Your browser does not support redo method! Please use shortcut CTRL + Y");
								};
								return false;
							}, 
							selectall : function (main, icon) {
								jQuery(main).find(".h5w-content").focus();
								document.execCommand('SelectAll', false, null);
								return true;
							}, 
							undo : function (main, icon) {
								jQuery(main).find(".h5w-content").focus();
								if (!document.execCommand('undo', false, null)) {
									alert("Your browser does not support undo method! Please use shortcut CTRL + Z");
								};
								return false;
							}, 
							createlink : function (main, icon) {
								document.execCommand('CreateLink', null, 'changeit');
								jQuery(main).find(".h5w-content a[href='changeit']").attr({
										href : prompt("Please URL", "http://"), 
										target : "_blank"
									});
								
								return true;
							}, 
							insertimage : function (main, icon) {
								
								document.execCommand('insertImage', null, 'changeit');
								
								jQuery(main).find(".h5w-content img[src='changeit']").each(function () {
										src = jQuery.trim(prompt("Please image URL", "http://"));
										alt = jQuery.trim(prompt("Please set alt", ""));
										jQuery(this).attr({
												src : src, 
												alt : alt
											});
										this.execCommand("enableObjectResizing", false, false);
										this.attachEvent("onresizestart", function (e) {
												e.returnValue = false;
											}, false);
									});
								
								return true;
							}, 
							unlink : function (main, icon) {
								document.execCommand('Unlink', false, null);
								return true;
							}, 
							fonttype : function (main, icon) {
								jQuery(main).find(".h5w-fonttype").html(jQuery(icon).find("span").clone());
								document.execCommand('fontName', false, jQuery(icon).find("span").css("font-family"));
								return true;
							}, 
							
							justifyright : function (main, icon) {
								document.execCommand('justifyRight', false, null);
								return true;
							}, 
							justifycenter : function (main, icon) {
								document.execCommand('justifyCenter', false, null);
								return true;
							}, 
							justifyleft : function (main, icon) {
								document.execCommand('justifyLeft', false, null);
								return true;
							}, 
							paste : function (main, icon) {
								if (!document.execCommand('paste', false, null)) {
									alert("Your browser does not support paste method! Please use shortcut CTRL + V or push left ctrl and right click");
								};
								return true;
							}, 
							copy : function (main, icon) {
								if (!document.execCommand('copy', false, null)) {
									alert("Your browser does not support copy method! Please use shortcut CTRL + C or push left ctrl and right click");
								};
								return true;
							}, 
							cut : function (main, icon) {
								if (!document.execCommand('cut', false, null)) {
									alert("Your browser does not support cut method! Please use shortcut CTRL + X or push left ctrl and right click");
								};
								return true;
							}, 
							
							indent : function (main, icon) {;
								document.execCommand('indent', null, false);
								return true;
							}, 
							outdent : function (main, icon) {;
								document.execCommand('outdent', null, false);
								return true;
							}, 
							removeformat : function (main, icon) {
								document.execCommand('removeformat', null, false);
								return true;
							}, 
							"delete" : function (main, icon) {
								document.execCommand('delete', null, false);
								return true;
							}, 
							formatblock : function (main, icon) {
								document.execCommand('formatBlock', null, "<" + jQuery(icon).attr("href").substr(1) + ">");
								return true;
							}, 
							
							fontcolor : function (main, icon) {
								document.execCommand("ForeColor", false, "#FFF");
								
								if (typeof(main) == 'string') {
									fontToSetColor = main;
								} else {
									fontToSetColor = jQuery(icon).parent().find(".h5w-font-picker").css("background-color");
								};
								jQuery(".h5w-content font[color]").removeAttr("color").css("color", fontToSetColor);
								
								return true;
							}, 
							hilitecolor : function (main, icon) {
								if (typeof(main) == 'string') {
									document.execCommand("hiliteColor", false, main);
									return false;
								};
								document.execCommand("hiliteColor", false, jQuery(icon).parent().find(".h5w-hilitecolor-picker").css("background-color"));
								return true;
							}, 
							table : function (main, icon, width, height) {
								document.execCommand('insertHTML', false, tablepicker.generate(width, height));
								
								//jQuery(main).find(".h5w-content table td" ).resizable();
								return true;
							}, 
							onIconClick : function (icon) {
								
							}
							
						}, options.functions);
					var tablepicker = {
						generate : function (width, height, anchor) {
							var TableCreator = "<table class='h5w-table-creator'>";
							for (n = 0; n <= height; ++n) {
								TableCreator += "<tr>";
								for (zn = 0; zn <= width; ++zn) {
									if (typeof anchor == "undefined") {
										TableCreator += "<td>&nbsp;</td>";
									} else {
										TableCreator += "<td><a href='#' ></a></td>";
									};
								};
								TableCreator += "</tr>";
							};
							TableCreator += "</table>";
							return TableCreator;
						}, 
						onSelect : function () {
							
						}, 
						prepare : function (MainHandle) {
							var onCloseTablePicker = function (event) {
								if (!(jQuery(event.target).is('.h5w-tablepicker-area') || jQuery(event.target).parents('.h5w-tablepicker-area').length)) {
									jQuery(".h5w-tablepicker-area").hide("slow");
									jQuery(document.body).unbind("click", onCloseTablePicker);
								};
								return false;
							};
							IHandle = jQuery(this);
							
							jQuery(MainHandle).find(".h5w-tablepicker").click(function () {
									
									tablepicker.onSelect = eval(jQuery(this).data("h5w-onselect-function"));
									var position = jQuery(this).position();
									var positionEditor = jQuery(MainHandle).position();
									
									jQuery(MainHandle).find(".h5w-tablepicker-area").css({
											left : position.left + positionEditor.left + jQuery(this).width() + 5, 
											top : position.top + positionEditor.top +jQuery(this).height() + 5
										}).html(tablepicker.generate(16, 16, true)).show("slow").find("table").delegate('td', 'mouseover mouseleave', function (e) {
											if (e.type == 'mouseover') {
												THandle = jQuery(this).parents("table");
												THeight = jQuery(this).parent().index();
												TWidth = jQuery(this).index() + 1;
												for (n = 0; n <= THeight; ++n) {
													THandle.find("tr:eq(" + n + ")").find("td:lt(" + TWidth + ")").addClass("hover");
												};
											} else {
												jQuery(this).parents("table").find("*").removeClass("hover");
											};
										}).find("td a").click(function (event) {
											tablepicker.onSelect(MainHandle, IHandle, jQuery(this).parent().index(), jQuery(this).parent().parent().index());
											jQuery(this).parents(".h5w-tablepicker-area").hide("slow");
											jQuery(document.body).unbind("click", onCloseTablePicker);
											
											return false;
										});
									setTimeout(function () {
											jQuery(document.body).click(onCloseTablePicker);
										}, 5);
									return false;
								});;
							
						}
						
					}, 
					picker = {
						changebg : ".something", 
						color : '', 
						onChange : function (color) {
							return false;
						}, 
						refreshSwatch : function (main) {
							var red = jQuery(this).parents(".h5w-picker-area").find(".h5w-picker-red").slider("value"), 
							green = jQuery(this).parents(".h5w-picker-area").find(".h5w-picker-green").slider("value"), 
							blue = jQuery(this).parents(".h5w-picker-area").find(".h5w-picker-blue").slider("value"), 
							opacity = (jQuery(this).parents(".h5w-picker-area").find(".h5w-picker-opacity").slider("value") / 100);
							
							picker.color = 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity + ')';
							jQuery(this).parents(".h5w-picker-area").find(".h5w-picker-swatch").css("background-color", picker.color);
							jQuery(picker.changebg).css("background-color", picker.color);
							picker.onChange(picker.color);
							return true;
						}, 
						prepare : function (MainHandle) {
							jQuery(MainHandle).find(".h5w-picker-red, .h5w-picker-green, .h5w-picker-blue, .h5w-picker-opacity").slider({
									orientation : "horizontal", 
									range : "min", 
									max : 255, 
									value : 127, 
									slide : picker.refreshSwatch, 
									change : picker.refreshSwatch
								});
							jQuery(MainHandle).find(".h5w-picker-red").slider("value", 255);
							jQuery(MainHandle).find(".h5w-picker-green").slider("value", 140);
							jQuery(MainHandle).find(".h5w-picker-green").slider("value", 140);
							jQuery(MainHandle).find(".h5w-picker-opacity").slider({
									max : 100, 
									value : 100, 
								});
							
							jQuery(MainHandle).find(".h5w-picker").click(function () {
									var position = jQuery(this).position();
									var positionEditor = jQuery(MainHandle).position();
									picker.changebg = jQuery(this).data("h5w-destination");
									picker.onChange = eval(jQuery(this).data("h5w-onchange-function"));
									jQuery(MainHandle).find(".h5w-picker-area").css({
											left : position.left + positionEditor.left + jQuery(this).width() + 5, 
											top : position.top + positionEditor.top  +jQuery(this).height() + 5
										}).show("slow");
									var onClosePicker = function (event) {
										if (!(jQuery(event.target).is('.h5w-picker-area') || jQuery(event.target).parents('.h5w-picker-area').length)) {
											jQuery(".h5w-picker-area").hide("slow");
											jQuery(document.body).unbind("click", onClosePicker);
										};
										return false;
									};
									setTimeout(function () {
											jQuery(document.body).click(onClosePicker);
										}, 5);
									
								});;
							
						}
						
					};
					
					sizepicker = {
						changesize : ".something", 
						fontSize : 12, 
						onChange : function (fontSize) {
							return false;
						}, 
						refreshSize : function (main) {
							
							sizepicker.fontSize = (jQuery(this).parents(".h5w-fontsize-picker-area").find(".h5w-fontsize-picker-size").slider("value"));
							
							jQuery(sizepicker.changesize).text(sizepicker.fontSize);
							sizepicker.onChange(sizepicker.fontSize);
							return true;
						}, 
						
						prepare : function (MainHandle) {
							
							jQuery(MainHandle).find(".h5w-fontsize-picker").click(function () {
									sizepicker.changesize = jQuery(this).data("h5w-destination");
									
									jQuery(MainHandle).find(".h5w-fontsize-picker-size").slider("destroy").slider({
											max : 73, 
											min : 8, 
											value : jQuery(sizepicker.changesize).text(), 
											slide : sizepicker.refreshSize, 
											change : sizepicker.refreshSize
										});
									
									var position = jQuery(this).position();
									var positionEditor = jQuery(MainHandle).position();
									sizepicker.changesize = jQuery(this).data("h5w-destination");
									sizepicker.onChange = eval(jQuery(this).data("h5w-onchange-function"));
									jQuery(MainHandle).find(".h5w-fontsize-picker-area").css({
											left : position.left + positionEditor.left + jQuery(this).width() + 5, 
											top : position.top + positionEditor.top + jQuery(this).height() + 5
										}).show("slow");
									var onCloseFontSizePicker = function (event) {
										if (!(jQuery(event.target).is('.h5w-fontsize-picker-area') || jQuery(event.target).parents('.h5w-fontsize-picker-area').length)) {
											jQuery(".h5w-fontsize-picker-area").hide("slow");
											jQuery(document.body).unbind("click", onCloseFontSizePicker);
										};
										return false;
									};
									setTimeout(function () {
											jQuery(document.body).click(onCloseFontSizePicker);
										}, 5);
									
								});;
							
						}
						
					};
					typepicker = {
						changeType : ".something", 
						fontType : "Arial", 
						onChange : function (fontType) {
							return false;
						}, 
						
						prepare : function (MainHandle) {
							
							jQuery(MainHandle).find(".h5w-fonttype-picker").click(function () {
									typepicker.changeType = jQuery(this).data("h5w-destination");
									
									var position = jQuery(this).position();
									var positionEditor = jQuery(MainHandle).position();
									
									typepicker.changeType = jQuery(this).data("h5w-destination");
									typepicker.onChange = eval(jQuery(this).data("h5w-onchange-function"));
									jQuery(MainHandle).find(".h5w-font-picker-area").css({
											left : position.left + positionEditor.left  + jQuery(this).width() - 100, 
											top : position.top + positionEditor.top + jQuery(this).height() + 10
										}).show("slow");
									var onCloseFontTypePicker = function (event) {
										if (!(jQuery(event.target).is('.h5w-font-picker-area') || jQuery(event.target).parents('.h5w-font-picker-area').length)) {
											jQuery(".h5w-font-picker-area").hide("slow");
											jQuery(document.body).unbind("click", onCloseFontTypePicker);
										};
										return false;
									};
									setTimeout(function () {
											jQuery(document.body).click(onCloseFontTypePicker);
										}, 5);
									
								});;
							
						}
						
					};
					
					function destroy() {
						
					};
					
					function formatXml(xml) {
						var formatted = '';
						var reg = /(>)(<)(\/*)/g;
						xml = xml.replace(reg, '$1\r\n$2$3');
						var pad = 0;
						jQuery.each(xml.split('\r\n'), function(index, node) {
							var indent = 0;
							if (node.match( /.+<\/\w[^>]*>$/ )) {
								indent = 0;
							} else if (node.match( /^<\/\w/ )) {
								if (pad != 0) {
									pad -= 1;
								};
							} else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
								indent = 1;
							} else {
								indent = 0;
							};

							var padding = '';
							for (var i = 0; i < pad; i++) {
								padding += '  ';
							};

							formatted += padding + node + '\r\n';
							pad += indent;
						});

						return formatted;
					};


					function selectElement(event) {
						var jTarget = jQuery(event.target);
						if (jTarget.hasClass("h5w-element-selected")) {
							return false;
						};
						
						jQuery(".h5w-element-selected").removeClass("h5w-element-selected");
						
						if (jTarget.parents('.h5w-content').length || jTarget.is(".h5w-content")) {
							jTarget.addClass("h5w-element-selected");
							FontFamily = jTarget.css("font-family");
							FontShortName = FontFamily.split(",");
							jQuery(".h5w-fonttype span").css("font-family", FontFamily).text(FontShortName[0]); // tutaj też się da lepiej ;]
							jQuery(".h5w-fontsize").text(jTarget.css("font-size").replace("px", "")); // tutaj też
							
							commandToExec = eval("options.onElement" + event.target.tagName.toUpperCase());
							if (jQuery.isFunction(commandToExec)) {
								commandToExec(this, jTarget, event);
							};
							options.onSelected(this, jTarget, event);
						};
						options.onUnSelected(this, jTarget, event);
						return true;
					};
					
					return this.each(function () {
							
							var MainHandle = this;
							jQuery(MainHandle).bind('h5w.destroy', destroy);
							
							jQuery(MainHandle).find('.h5w-tabs').tabs({
									
								}).find(".ui-tabs-nav").sortable({
									axis : "x"
								});
							jQuery(MainHandle).find(".h5w-icon , .h5w-icon-js").bind("click", function () {
									FunName = jQuery(this).data("h5w-function");
									ToUseFunction = eval("functions." + FunName);
									if (jQuery.isFunction(ToUseFunction)) {
										ToUseFunction(MainHandle, this);
									} else {
										alert("Not found function: " + FunName);
									};
									jQuery(MainHandle).find(".h5w-content").trigger("change");
									options.onUseButtons(this, FunName, ToUseFunction);
									if (jQuery(this).data("h5w-result")) {
										return true;
									};
									
									return false;
								});
							jQuery(document).keydown(function (event) {
									if (event.keyCode == 9) {
										if($(event.target).is(".h5w-content")){
											document.execCommand('insertHTML', false, "\t");
											event.preventDefault();
											event.returnValue = false;
											return false;
										};
										return true;
									};
								});
							jQuery(MainHandle).find(".h5w-tabs-bottom").tabs();
							jQuery(MainHandle).find(".h5w-tabs-bottom .ui-tabs-nav, .h5w-tabs-bottom .ui-tabs-nav > *") 
							.removeClass("ui-corner-all ui-corner-top") 
							.addClass("ui-corner-bottom");
							jQuery(MainHandle).find(".h5w-refresh-textarea").click(function () {
									jQuery(MainHandle).find(".h5w-texarea").val(formatXml(options.onTextarea(jQuery(MainHandle).find(".h5w-content").html())));
								});
							jQuery(MainHandle).find(".h5w-refresh-editor").click(function () {
									jQuery(MainHandle).find(".h5w-content").html(options.onVisual(jQuery(MainHandle).find(".h5w-texarea").val())).trigger("change");
									
								});
							jQuery(MainHandle).find(".h5w-texarea").val(options.onVisual(jQuery(MainHandle).find(".h5w-content").html()));
							picker.prepare(MainHandle);
							tablepicker.prepare(MainHandle);
							sizepicker.prepare(MainHandle);
							typepicker.prepare(MainHandle);
							
							jQuery(MainHandle).find(".h5w-content").html(options.content).bind("keyup change", options.onChange).click(selectElement).bind('contextmenu', function (e) {
									if (e.ctrlKey) {
										return true;
									};
									
									$(MainHandle).find(".h5w-context-menu").css({
											left : e.pageX, 
											top : e.pageY, 
											zIndex : '101'
										}).show().click("click", function () {
											$(this).hide("slow");
										});
									var onHideContentMenu = function (de) {
										if ($(de.target).is(".h5w-context-menu") || $(de.target).parents(".h5w-context-menu").length) {
											
										} else {
											$(".h5w-context-menu").hide("slow");
											$(document.body).unbind("mousedown", onHideContentMenu);
										}
									};
									$(document.body).mousedown(onHideContentMenu);
									
									ToUseFunction = eval("contextMenu." + (e.target.tagName.toLowerCase()));
									if (jQuery.isFunction(ToUseFunction)) {
										ToUseFunction(e, this);
									};
									
									ToUseFunction = eval("options.contextMenu." + (e.target.tagName.toLowerCase()));
									if (jQuery.isFunction(ToUseFunction)) {
										ToUseFunction(e, this);
									};
									var HContextAttr = $(e.target);
									if (!HContextAttr.is(".h5w-content")) {
										var hContextMenu = $(".h5w-context-menu .h5w-c-attr").html("");
										hContextMenu.append(
											$("<li>").html(
												$("<a>").attr({
														"href" : "#", 
														"class" : "h5w-c-add"
													}).text("Add").click(function () {
														HContextAttr.attr(
															prompt("Insert attr name: "), 
															prompt("Insert attr value: "));
														return true;
													})));
										
										for (var i = 0, attrs = e.target.attributes, l = attrs.length; i < l; i++) {
											hContextMenu.append(
												$("<li>").html(
													$("<a>").attr({
															"href" : "#", 
															"class" : "h5w-c-attrx"
														}).text(attrs.item(i).nodeName).click(function () {
															resValue = prompt("Set attribute " + $(this).text() + " : ", HContextAttr.attr($(this).text()));
															HContextAttr.attr($(this).text(), resValue);
															if (resValue == "" || typeof resValue == "null") {
																HContextAttr.removeAttr($(this).text());
															};
															return true;
														})));
										};
									};
									return false;
								});
							jQuery(MainHandle).find(".h5w-scroll").click(function () {
									StyleBox = jQuery(MainHandle).find(jQuery(this).data("h5w-toscroll"));
									
									StyleBox.animate({
											"scrollTop" : jQuery(this).data("h5w-scroll") 
										}, "slow");
								});
							
							jQuery(MainHandle).find(".h5w-content").trigger("change");
							options.onLoad(this);
							
							this.onpaste = function(event){
								  var items = event.clipboardData.items;
								  var blob = items[0].getAsFile();
								  var reader = new FileReader();
								  reader.onload = function(event){
										document.execCommand('insertImage', null, event.target.result);
									}; 
								  reader.readAsDataURL(blob);
								};


						});
				}, 
				getContent : function () {
					jQuery(this).find(".h5w-refresh-textarea").trigger("click");
					return jQuery(this).find(".h5w-texarea").val().replace("<!--?php", "<?php");
				}, 
				loadLang : function (lang) {
					jQuery(this).find("[data-h5w-lang]").each(function(){
						var lang_options = $(this).data("h5w-lang").split("|");
						var lang_word = lang_options[0];
						var hthis = $(this);
						if(typeof lang[lang_word] == "undefined")
							return true;
							
						lang_options.splice(0 ,1);
						if (lang_options.length <1){
							hthis.html(lang[lang_word]);
						}else{
							$.each(lang_options, function(index, value) { 
							  if(value == "html"){
								hthis.html(lang[lang_word]);
							  }else{
								hthis.attr(value, lang[lang_word]);
							  };
							});
						}
					});
					return true;
				}, 
				setContent : function (cont) {
					jQuery(this).find(".h5w-content").html(cont).trigger("change");
				}, 
				editor : function () {
					return jQuery(this).find(".h5w-content");
				}
				
			});
	})(jQuery);
 