Project built with TypeScript, React, Redux, JavaScript, MaterialUI, Styled-components, webpack

Figma mockup link: https://www.figma.com/file/LyD3goKV3aoApbb60aTNA4/ReadJourney-(Copy)?node-id=0%3A1&mode=dev
Back-end link to the project: https://readjourney.b.goit.study/api-docs/

Technical Task for the Read Journey Project

General information:

The layout should be responsive, excluding mobile devices, specifically:

● Mobile: (from 320px - fluid; from 375px - adaptive)
● Tablet: from 768px;
● Desktop: from 1440px

Must include:

● Adherence to semantics according to HTML5 standards
● Font integration
● Optimization of vector and raster graphics sizes
● Support for retina display images
● Image loading optimization
● All icons connected via sprite
● Addition of a page favicon

Unauthorized user

  Register page "/register"  
  
  Consists of a RegisterForm and a link to the Login page /login ("Already have an account?")

  - RegisterForm contains inputs (Name, Email, Password), a "submit" button - Registration, and should be validated using the react-hook-form + Yup libraries.

  - Name - string
  - Email - string with pattern /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  - Password - string, minimum 7 characters
  - If there are invalid values, the error reason should be displayed to the user, and the data should not be sent to the backend.
  - If all values are valid, the data should be sent to the backend.

  - If the backend returns an error, it should be processed and displayed to the user in the form of a notification popup.
  - If the request to the backend is successful and a token is generated for the user, automatic authorization should be implemented, and the user should be 
    redirected to the private Recommended page /recommended.

Login page "/login"

Consists of a LoginForm and a link to the Register page /register ("Don’t have an account?")

- LoginForm contains inputs (Email, Password), a "submit" button - Log In, and should be validated using the react-hook-form + Yup libraries.

- Email - string with pattern /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
- Password - string, minimum 7 characters
- If there are invalid values, the error reason should be displayed to the user, and the data should not be sent to the backend.
- If all values are valid, the data should be sent to the backend.

- If the backend returns an error, it should be processed and displayed to the user in the form of a popup notification.
- If the request to the backend is successful and a token is generated for the user, automatic authorization should be implemented, and the user should be   
  redirected to the private Recommended page /recommended.

Authorized user

It includes a Header that is displayed on all pages for an authorized user.

The Header includes:

- Company logo
- UserNav block with the following navigation items:
- /recommended - redirects to Recommended page
- /library - redirects to My library
- UserBar block with information about the current user
- Log out button

- On mobile and tablet versions, UserNav should be implemented as a burger menu.

- The active page where the authorized user is located should be displayed in UserNav.

- Upon clicking the Log out button, a request should be sent to the backend to end the active user session.

- If the backend returns an error, it should be handled and displayed to the user in the form of a popup notification.
- If the request to the backend is successful, the user should be redirected to the public Welcome page.

- Regardless of the backend response, the user should be 'logged out' on the client side by clearing the redux store and localStorage.

Recommended page "/recommended"

Consists of panel Dashboard and RecommendedBooks block.

The Dashboard component should be implemented as a universal component that wraps different content depending on the page. On the Recommended page, it includes:

- Filters block, implemented as a form with 2 inputs and a 'submit' button labeled 'To apply', which helps the user find books among the recommended ones.
- Block with a brief description of the application's functionality and a link to the My library page.
- Block with a quote (static data).
- The AddWordBtn button is NOT displayed on the Recommend page.

The RecommendedBooks component includes:

- Page title
- Pagination, implemented as server-side pagination, passing the page number and number of items per page as parameters in the server request. Pagination always 
  includes 'previous' and 'next' arrows. Clicking on the 'previous' arrow moves to the previous page. If the user is on the first page, the 'previous' arrow should 
  be inactive. Clicking on the 'next' arrow moves to the next page. If the user is on the last page, the 'next' arrow should be inactive.
- List of recommended books, implemented as a list of cards. Each book card includes an image of the book cover, its title, and author. Clicking on the book cover 
  opens a modal window with detailed information about the book and a button 'Add to library' that allows the user to add the book to their own library. Clicking 
  on the modal window's backdrop, clicking on the close button icon, or pressing the ESC key should close the modal window.

 
 	
My Library page "/library"

Consists of panel Dashboard and MyLibraryBooks block.

- The Dashboard component should be implemented as a universal component that wraps different content depending on the page. On the My Library page, it includes:

- AddBook block, implemented as a form consisting of 3 inputs and a 'submit' button labeled 'Add book'. All form fields must be validated for valid values. Upon clicking the 'Add book' button, a request should be sent to the backend to add a new book to the user's library. If the backend returns an error, it should be processed and displayed to the user as a notification popup. If the backend request is successful, a modal window should open with information about the successful creation of the book.
- Block with a list of recommended books and a link to the Recommended page.

The MyLibraryBooks component includes:

- Page title
- Select dropdown, allowing the user to filter books in their library by reading status
- List of user's books, presented as a series of cards. Each book card includes an image of the book cover, its title, author, and a button. Clicking this button  sends a request to the server to delete the book from the user's library. Clicking on the book cover opens a modal window with detailed information about the book and a 'Start reading' button (which allows the user to begin reading by navigating to the Reading Page). Clicking on the backdrop of the modal window, the button with a cross icon, or pressing the ESC key should close the modal window.

Reading page "/reading"

Consists of panel Dashboard and MyBook block.

- The Dashboard component should be implemented as a universal component that wraps different content depending on the page. On the Reading page, it includes:

- AddReading block, implemented as a form consisting of 1 input field and a submit button labeled 'To start' or 'To stop' depending on the reading phase. All form fields must be validated.

- Clicking the 'To start' button sends a request to the backend to save the page number where the user started reading. If the backend returns an error, it should be processed and displayed to the user in the form of a notification popup. If the backend request is successful, the MyBook block should indicate the reading state as 'In progress'.

- Clicking the 'To stop' button sends a request to the backend to save the page number where the user stopped reading. If the backend returns an error, it should be processed and displayed to the user in the form of a notification popup. If the backend request is successful, data regarding the reading speed, calculated on the server, should be updated in the Details block. If the book is completed (the page where the user stopped reading matches the total number of pages in the book), a modal window should be opened with information about successful completion.

- Details block with detailed information about the user's reading, presented as a diary (Diary) or in the form of statistics (Statistics).

- The Diary component should be implemented as an event tracker of the user's reading activities by dates, indicating the number of pages read, the time spent reading them, the percentage of pages read compared to the total number of pages in the book, and a button. Clicking this button should send a request to the server to delete the reading event for this book by the user.

- The Statistics component should be implemented as a graph that allows the user to track the progress of reading a book.
