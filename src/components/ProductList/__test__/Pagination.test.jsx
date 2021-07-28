import { render, screen, fireEvent } from '@testing-library/react';
import { readyException } from 'jquery';
import Pagination from '../Pagination';
const mockedpaginate = jest.fn();
it('should have empty when next button is cliked', () => {
    render(
        <Pagination 
                postsPerPage={5}
                totalPosts={20}
                paginate={mockedpaginate}
                currentPage={2}
        />
    );
    
    const buttonElement = screen.getByRole("button", { name: /next/i});
    fireEvent.click(buttonElement)
     expect(buttonElement.value).toBe("")
});

it('should have empty when prev button is cliked', () => {
    render(
        <Pagination 
                postsPerPage={5}
                totalPosts={20}
                paginate={mockedpaginate}
                currentPage={2}
        />
    );
    
    const buttonElement = screen.getByRole("button", { name: /prev/i});
    fireEvent.click(buttonElement)
     expect(buttonElement.value).toBe("")
});

it('should have empty when number button is cliked', () => {
    render(
        <Pagination 
                postsPerPage={5}
                totalPosts={20}
                paginate={mockedpaginate}
                currentPage={2}
        />
    );
    
    const listElement = screen.getAllByPlaceholderText( /number value/i);
     
     expect(listElement.length).toBe(4)
});

it('should have more than 5 pages  cliked', () => {
    render(
        <Pagination 
                postsPerPage={5}
                totalPosts={40}
                paginate={mockedpaginate}
                currentPage={2}
        />
    );
    
    const listElement = screen.getAllByPlaceholderText( /number value/i);
     
     expect(listElement.length).toBe(5)
});
it('should have more than 5 pages and current pages should be greater than 5 button is cliked', () => {
    render(
        <Pagination 
                postsPerPage={5}
                totalPosts={100}
                paginate={mockedpaginate}
                currentPage={8}
        />
    );
    
    const listElement = screen.getAllByPlaceholderText( /number value/i);
    const buttonElement = screen.getAllByPlaceholderText( /buttonElement/i);
     expect(listElement.length).toBe(5)
     expect(buttonElement.length).toBe(5)
     
});


/*
  
    function goToNextPage() {
        props.paginate(props.currentPage+1);
    }

    function goToPreviousPage() {
        props.paginate(props.currentPage-1);
    }
*/
// it(' Next page render properly', () => {
//     render(
//         <Pagination 
//                 postsPerPage={5}
//                 totalPosts={20}
//                 paginate={mockedpaginate}
//                 currentPage={2}
//         />
//     );
    
//     const buttonElement = screen.getByRole("button", { name: /prev/i});
     
//      expect(buttonElement.onclick.value).toBe(1)
// });