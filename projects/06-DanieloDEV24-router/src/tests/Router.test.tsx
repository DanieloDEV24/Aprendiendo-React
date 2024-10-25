import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Router } from '../components/Router'
import { RouteType } from '../assets/Lib/types'

const defaultRoutes: RouteType[] = []
describe('Router', () => {
    it('should render without problems', () => {
        render(<Router routes={defaultRoutes}/>) 
        expect(true).toBeTruthy()
    })
})