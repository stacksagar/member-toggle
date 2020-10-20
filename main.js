const addIn = document.getElementById('addInput');
const filterIn = document.getElementById('filterInput');
const members = document.getElementById('members');
const loading = document.getElementById('loading');
const form = document.querySelector('form');
const memberRemove = document.querySelectorAll('.memberRemove');

// for add singleMember
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (addIn.value.length > 0) {
    loading.style.transform = 'scale(1)';
    setTimeout(() => {
      loading.style.transform = 'scale(0)';
      const singleMember = document.createElement('div');
      const pName = document.createElement('p');
      const pRemove = document.createElement('p');
      singleMember.classList.add('singleMember');
      pName.classList.add('memberName');
        pRemove.classList.add('memberRemove');
        const addName = addIn.value;
      pName.innerText = addName;
      pRemove.innerHTML = '&times;';
      members.appendChild(singleMember).appendChild(pName);
      singleMember.appendChild(pRemove);
      addIn.value = '';
      pRemove.addEventListener('click', function () {
        this.parentElement.remove();
      });
    }, 1000);
  }
});

// for singleMember remove
memberRemove.forEach((remove) => {
  remove.addEventListener('click', function () {
    this.parentElement.remove();
  });
});

// for clear all singleMember
function clearAll() {
  members.innerHTML = '';
}

filterIn.addEventListener('input', function () {
  let ivalue = this.value.trimStart();
  ivalue = ivalue.trimEnd();
  const allSingleMember = document.querySelectorAll('.singleMember');
  for (const member of allSingleMember) {
    const firstChild = member.firstElementChild.innerHTML;
    if (firstChild.includes(ivalue)) {
      member.style.display = 'unset';
    } else {
      member.style.display = 'none';
    }
  }
});
