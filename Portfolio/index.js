document.getElementById("download-resume").addEventListener('click', function(){
    const pdfUrl = 'public/resume.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Tufayl_resume'; 
    downloadLink.target = '_blank'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Focus the new window/tab
    if (newWindow) {
        newWindow.focus();
    }
})