import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();


  
export const Settings = {
    domain: process.env.domain
}
