
export default function decorate(block) {
  const children = block.children;

  [...children].forEach((child) => { 
    child.classList.add('link-item');
    const div = child.querySelector(':scope > div');
    const consoleLink = child.querySelector('a').title;

    if (consoleLink.toLowerCase() === 'console') {
      child.classList.add('console-btn');
    }

    const titleText = div.querySelector('p:first-child').textContent;
    const link = div.querySelector('a');

    const newLink = document.createElement('a');
    newLink.href = link.href;
    newLink.title = titleText;
    newLink.textContent = titleText;

    div.replaceWith(newLink);
  });
}