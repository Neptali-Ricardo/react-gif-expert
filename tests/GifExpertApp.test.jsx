import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 
    
    test('debe agregar una nueva categoría', () => { 
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: 'New Category' } });
        fireEvent.submit( form );
        
        expect( screen.getByText('New Category') ).toBeInTheDocument();
    });

    test('no debe agregar una categoría duplicada', () => { 
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: 'New Category' } });
        fireEvent.submit( form );
        
        fireEvent.input( input, { target: { value: 'New Category' } });
        fireEvent.submit( form );
        
        const categories = screen.getAllByText('New Category');
        expect( categories.length ).toBe(1);
    });
});
