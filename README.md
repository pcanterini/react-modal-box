React Modal Box
---

![React Modal Box](http://i.imgur.com/tYqVH7z.png)

---

React Modal Box, is a simple but customizable React Component to display Modals on your application. Its simple
event system allows you to place the modal in the root component of your application, and calling it with
the simple mixins, allows you to be flexible. It also includes event handling mixins, so you can detect when the modal
is being called or being hidden.

API
---

__Example__

[Live example](https://pcanterini.github.io/react-modal-box)

__Installing__
```
npm install react-modal-box --save
```


__Importing__

```
import { Modal, ModalMixin, ModalEventsMixin } from 'react-modal-box';
```

__Invoking__

```
<Modal />
```

__Custom Styles__

```
// Place here React Styles (camel Case)

<Modal customStyles={{
    modalBackdrop: {
      // Backdrop styles
    },
    modalContainer: {
      // Modal container styles
    },
    modalDismiss: {
      // Dismiss Button Styles
    },
    modalIcon: {
      // Default Icon styles, element inside the modal Dismiss
    },
    modalHeader: {
      // Header Styles
    },
    modalContent: {
      // Content Styles
    },
    modalFooter: {
      // Footer Styles
    }
/>
```

__Custom Icon Style__

```
<Modal customIcon={<i className="your-icon-class" />} />
```

__Invoking Mixins__

```
this.modalShow(
    <h1>Title</h1>,
    <p>Content</p>,
    <button onClick={this.hide}>Close Button</button>
);
```

```
this.modalHide();
```

__Events Mixins__

```
this.onModalShow(function (header, content, footer) {
   // The arguments passed into the function are the JSX
   // you sent to the modal when you invoked it.
   console.log("Modal Shown!");
});

this.onModalHide(function (header, content, footer) {
   // These arguments return nothing other than null's
   console.log("Modal Hidden!");
});
```

LICENCE
---
The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
