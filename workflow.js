const workflowDialog = document.querySelector('#workflow-dialog');
const workflowPlayer = document.querySelector('#workflow-player');
let workflowPreviousFocus;
document.querySelectorAll('[data-drive-film]').forEach(button => button.addEventListener('click', () => {
  workflowPreviousFocus = button;
  const iframe = document.createElement('iframe');
  iframe.src = 'https://drive.google.com/file/d/' + button.dataset.driveFilm + '/preview';
  iframe.title = 'Astro AI-assisted product advert';
  iframe.allow = 'autoplay; fullscreen';
  iframe.allowFullscreen = true;
  workflowPlayer.replaceChildren(iframe);
  workflowDialog.showModal();
}));
workflowDialog.querySelector('button').addEventListener('click', () => workflowDialog.close());
workflowDialog.addEventListener('click', event => { if (event.target === workflowDialog) workflowDialog.close(); });
workflowDialog.addEventListener('close', () => { workflowPlayer.replaceChildren(); workflowPreviousFocus?.focus(); });
