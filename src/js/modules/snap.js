document
    .querySelectorAll(`.order`)
    .forEach(element => new Snap({
      element: element,
      maxPosition: 123,
      minPosition: -123,
      disable: 'left',
    })
  );

  // var snapper = new Snap({
  //   element: document.querySelector('.order'),
  //   maxPosition: 160,
  //   minPosition: -160,
  //   disable: 'left',
  // });