const answers = document.querySelectorAll('pre.s-code-block');

answers.forEach(answer => {
  answer.classList.add('answer-section');

  const copyButton = document.createElement('button');
  copyButton.innerHTML = 'Copy';
  copyButton.classList.add('copy-button');

  copyButton.addEventListener('click', () => {
    const answerText = answer.querySelector('code').innerText;
    navigator.clipboard.writeText(answerText);
    copyButton.innerHTML = 'Copied!';
    setTimeout(() => { copyButton.innerHTML = 'Copy' }, 2000);
  });

  answer.appendChild(copyButton);
});

