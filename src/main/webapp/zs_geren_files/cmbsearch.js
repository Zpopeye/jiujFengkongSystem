function CmbSearch(sSearchWord, sfromweb) {
    if (sSearchWord == '' || sSearchWord == null || sSearchWord.trim() == "") {
        alert("�ؼ��ʲ���Ϊ��");
        return false
    }
    else if (sSearchWord.length > 50) {
        alert("������ļ����ʳ�����󳤶�50��");
        return false;
    }
    else {
        searchTrack();
        var searchwordwhere = sSearchWord.trim().trssearch().replaceteshustr();
        /*��¼�����ؼ���*/
        try {
            personalreco.RecordSearchhistoryInSide(searchwordwhere);
        }
        catch (ex) {
        }
        
        if (searchwordwhere == "" || searchwordwhere == null) {
            alert("��Ǹ������������ݲ��ڲ�ѯ��Χ�ڣ�");
            return false;
        }
        else if (null != sfromweb && "" != sfromweb) {
            window.open('http://sou.cmbchina.com/search?s=main&q=' + encodeURI(searchwordwhere));
        }
        else {
            window.open('http://sou.cmbchina.com/search?s=main&q=' + encodeURI(searchwordwhere));
        }
    }

}
    
    
 String.prototype.trim = function()
{
    return this.replace(/(^[\s]*)|([\s]*$)/g, "");
}
String.prototype.trssearch = function()
{
    return this.replace(/\s+/g, "+");
}

String.prototype.replaceteshustr = function()
{
    return this.replace(/[@#\$%\^&\*!~'(��\-\/%.����,?+]+/g, "");
}

function searchTrack()
{
    var objecturl = location.href;
	var columnname = gI18n?dcsEscape(dcsEncode("����"),I18NRE):"����";
	var okeyword = document.getElementById("SearchWord").value;
	var objectname = gI18n?dcsEscape(dcsEncode(okeyword),I18NRE):okeyword;
	var objecttype = gI18n?dcsEscape(dcsEncode("��ť����"),I18NRE):"��ť����";;
	var pagetitle = gI18n?dcsEscape(dcsEncode(document.title),I18NRE):document.title;
	var ip = window.location.hostname;
	var click = 'click';
	
    dcsMultiTrack('DCS.dcssip',ip,'DCS.dcsuri',objecturl,'WT.ti',objectname,'DCSext.wt_click',click, 'DCSext.wt_cname', columnname, 'DCSext.wt_otype', objecttype, 'DCSext.wt.domain', ip, 'DCSext.wt_ptitle', pagetitle);						
}
