import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Navbar from "./Navbar"


test('Navbar component renders', () => {
    expect(render(<Navbar />))
    expect(screen.getByText('Mood Spark')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
})