/*!
 * FileInput Spanish (Latin American) Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";
    $.fn.fileinput.locales.es = {
    		fileSingle: '单个文件',
            filePlural: '多个文件',
            browseLabel: '选择文件 &hellip;',
            removeLabel: '删除文件',
            removeTitle: '删除选中文件',
            cancelLabel: '取消',
            cancelTitle: '取消上传',
            uploadLabel: '上传',
            uploadTitle: '上传选中文件',
            msgSizeTooLarge: '文件 "{name}" (<b>{size} KB</b>) 超过最大允许上传的大小 <b>{maxSize} KB</b>. 请从新上传!',
            msgFilesTooLess: '文件数量必须大于 <b>{n}</b> {files} ，请重新上传！',
            msgFilesTooMany: 'Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>. 请从新上传!',
            msgFileNotFound: '文件 "{name}" 未找到!',
            msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
            msgFileNotReadable: 'File "{name}" is not readable.',
            msgFilePreviewAborted: 'File preview aborted for "{name}".',
            msgFilePreviewError: 'An error occurred while reading the file "{name}".',
            msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
            msgInvalidFileExtension: '仅支持 "{extensions}" 文件格式上传',
            msgValidationError: '文件上传错误',
            msgLoading: 'Loading file {index} of {files} &hellip;',
            msgProgress: 'Loading file {index} of {files} - {name} - {percent}% completed.',
            msgSelected: '选中{n}个文件',
            msgFoldersNotAllowed: 'Drag & drop files only! {n} folder(s) dropped were skipped.',
            dropZoneTitle: 'Drag & drop files here &hellip;'
    };

    $.extend($.fn.fileinput.defaults, $.fn.fileinput.locales.es);
})(window.jQuery);
