import { BrowserContext, Page, test, TestInfo } from '@playwright/test'
import { Workbook } from 'exceljs'
import { runSheet } from './actions'
import {
  ACTION, ACTION_FORMAT, COMMENT_FORMAT,
  DATA, FILE, humanNowDateTime, LOCATOR, PRINT_FORMAT,
  SHEET, TRACE, TRACE_FORMAT,
} from './consts'
import { logAll, logSheetClose, parseInts, SHEET_TIMER, TOTAL_SUMMARY, TOTAL_TIMER } from './lib'

//global page and context
let page: Page;
let ctx: BrowserContext;
const wb = new Workbook();
const vars = {};

test.describe('iBot Tests',()=>{


  test.beforeAll(async ({browser}) => {
    logAll('Before iBot Tests...')
    TOTAL_TIMER.start()
    logAll('NOW:', humanNowDateTime())
    logAll('FILE:', FILE)
    logAll('SHEET:', SHEET)

    logAll('LOCATOR:', LOCATOR)
    logAll('ACTION:', ACTION)
    logAll('DATA:', DATA)
    logAll('ACTION_FORMAT:', ACTION_FORMAT)
    logAll('PRINT_FORMAT:', PRINT_FORMAT)
    logAll('COMMENT_FORMAT:', COMMENT_FORMAT)

    logAll('TRACE_FORMAT:', TRACE_FORMAT)
    logAll('DEBUG_TRACE:', TRACE)

    
    await wb.xlsx.readFile(FILE!)
    //Init the context and page for all the test cases
    ctx ??= await browser.newContext();
    page ??= await ctx.newPage();
  });

  test.afterAll(async ({ browser }) => {
    logAll('After iBot Tests...')
    logAll('----')
    logAll('TOTAL TIME:', TOTAL_TIMER.end())
    logAll('TOTAL ACTIONS:', TOTAL_SUMMARY.actions)
    logAll('---------- xxxx ----------')
    logAll()
    //browser.close;
  })
//Placeholder for the generated code 
  test.describe('Run Sheet 1. Login',()=>{
                  logAll()
                  logAll('Running sheet: 1. Login - 28 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('1. Login  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('1. Login  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('1. Login  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('1. Login  -- 005-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('1. Login  -- 006-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('1. Login  -- 007-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('1. Login  -- 008-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('1. Login  -- 009-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('1. Login  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('1. Login  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('1. Login  -- 012-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('1. Login  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('1. Login  -- 014-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('1. Login  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('1. Login  -- 016-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('1. Login  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('1. Login  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('1. Login  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('1. Login  -- 020-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('1. Login  -- 021-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('1. Login  -- 022-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('1. Login  -- 023-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('1. Login  -- 024-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('1. Login  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('1. Login  -- 026-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('1. Login  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('1. Login  -- 028-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('1. Login'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 2. Dashboard',()=>{
                  logAll()
                  logAll('Running sheet: 2. Dashboard - 133 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('2. Dashboard  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('2. Dashboard  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('2. Dashboard  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('2. Dashboard  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('2. Dashboard  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('2. Dashboard  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('2. Dashboard  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('2. Dashboard  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('2. Dashboard  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('2. Dashboard  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('2. Dashboard  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('2. Dashboard  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('2. Dashboard  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('2. Dashboard  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('2. Dashboard  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('2. Dashboard  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('2. Dashboard  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('2. Dashboard  -- 019-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('2. Dashboard  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('2. Dashboard  -- 021-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('2. Dashboard  -- 022-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('2. Dashboard  -- 023-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('2. Dashboard  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('2. Dashboard  -- 025-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('2. Dashboard  -- 026-file', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('2. Dashboard  -- 027-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('2. Dashboard  -- 028-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('2. Dashboard  -- 029-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('2. Dashboard  -- 030-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('2. Dashboard  -- 031-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('2. Dashboard  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('2. Dashboard  -- 033-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('2. Dashboard  -- 034-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('2. Dashboard  -- 035-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('2. Dashboard  -- 036-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('2. Dashboard  -- 037-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('2. Dashboard  -- 038-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('2. Dashboard  -- 039-file', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 39, 39, vars)
                })
                            
                
                test('2. Dashboard  -- 040-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 40, 40, vars)
                })
                            
                
                test('2. Dashboard  -- 041-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                test('2. Dashboard  -- 042-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 42, 42, vars)
                })
                            
                
                test('2. Dashboard  -- 043-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 43, 43, vars)
                })
                            
                
                test('2. Dashboard  -- 044-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 44, 44, vars)
                })
                            
                
                test('2. Dashboard  -- 045-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 45, 45, vars)
                })
                            
                
                test('2. Dashboard  -- 046-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 46, 46, vars)
                })
                            
                
                test('2. Dashboard  -- 047-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 47, 47, vars)
                })
                            
                
                test('2. Dashboard  -- 048-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 48, 48, vars)
                })
                            
                
                test('2. Dashboard  -- 049-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 49, 49, vars)
                })
                            
                
                test('2. Dashboard  -- 050-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 50, 50, vars)
                })
                            
                
                test('2. Dashboard  -- 051-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 51, 51, vars)
                })
                            
                
                test('2. Dashboard  -- 052-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 52, 52, vars)
                })
                            
                
                test('2. Dashboard  -- 053-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 53, 53, vars)
                })
                            
                
                test('2. Dashboard  -- 054-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 54, 54, vars)
                })
                            
                
                test('2. Dashboard  -- 055-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 55, 55, vars)
                })
                            
                
                test('2. Dashboard  -- 056-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 56, 56, vars)
                })
                            
                
                test('2. Dashboard  -- 057-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 57, 57, vars)
                })
                            
                
                test('2. Dashboard  -- 058-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 58, 58, vars)
                })
                            
                
                test('2. Dashboard  -- 059-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 59, 59, vars)
                })
                            
                
                test('2. Dashboard  -- 060-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 60, 60, vars)
                })
                            
                
                test('2. Dashboard  -- 061-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 61, 61, vars)
                })
                            
                
                test('2. Dashboard  -- 062-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 62, 62, vars)
                })
                            
                
                test('2. Dashboard  -- 063-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 63, 63, vars)
                })
                            
                
                test('2. Dashboard  -- 064-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 64, 64, vars)
                })
                            
                
                test('2. Dashboard  -- 065-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 65, 65, vars)
                })
                            
                
                test('2. Dashboard  -- 066-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 66, 66, vars)
                })
                            
                
                test('2. Dashboard  -- 067-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 67, 67, vars)
                })
                            
                
                test('2. Dashboard  -- 068-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 68, 68, vars)
                })
                            
                
                test('2. Dashboard  -- 069-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 69, 69, vars)
                })
                            
                
                test('2. Dashboard  -- 070-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 70, 70, vars)
                })
                            
                
                test('2. Dashboard  -- 071-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 71, 71, vars)
                })
                            
                
                test('2. Dashboard  -- 072-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 72, 72, vars)
                })
                            
                
                test('2. Dashboard  -- 073-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 73, 73, vars)
                })
                            
                
                test('2. Dashboard  -- 074-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 74, 74, vars)
                })
                            
                
                test('2. Dashboard  -- 075-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 75, 75, vars)
                })
                            
                
                test('2. Dashboard  -- 076-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 76, 76, vars)
                })
                            
                
                test('2. Dashboard  -- 077-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 77, 77, vars)
                })
                            
                
                test('2. Dashboard  -- 078-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 78, 78, vars)
                })
                            
                
                test('2. Dashboard  -- 079-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 79, 79, vars)
                })
                            
                
                test('2. Dashboard  -- 080-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 80, 80, vars)
                })
                            
                
                test('2. Dashboard  -- 081-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 81, 81, vars)
                })
                            
                
                test('2. Dashboard  -- 082-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 82, 82, vars)
                })
                            
                
                test('2. Dashboard  -- 083-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 83, 83, vars)
                })
                            
                
                test('2. Dashboard  -- 084-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 84, 84, vars)
                })
                            
                
                test('2. Dashboard  -- 085-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 85, 85, vars)
                })
                            
                
                test('2. Dashboard  -- 086-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 86, 86, vars)
                })
                            
                
                test('2. Dashboard  -- 087-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 87, 87, vars)
                })
                            
                
                test('2. Dashboard  -- 088-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 88, 88, vars)
                })
                            
                
                test('2. Dashboard  -- 089-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 89, 89, vars)
                })
                            
                
                test('2. Dashboard  -- 090-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 90, 90, vars)
                })
                            
                
                test('2. Dashboard  -- 091-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 91, 91, vars)
                })
                            
                
                test('2. Dashboard  -- 092-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 92, 92, vars)
                })
                            
                
                test('2. Dashboard  -- 093-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 93, 93, vars)
                })
                            
                
                test('2. Dashboard  -- 094-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 94, 94, vars)
                })
                            
                
                test('2. Dashboard  -- 095-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 95, 95, vars)
                })
                            
                
                test('2. Dashboard  -- 096-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 96, 96, vars)
                })
                            
                
                test('2. Dashboard  -- 097-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 97, 97, vars)
                })
                            
                
                test('2. Dashboard  -- 098-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 98, 98, vars)
                })
                            
                
                test('2. Dashboard  -- 099-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 99, 99, vars)
                })
                            
                
                test('2. Dashboard  -- 100-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 100, 100, vars)
                })
                            
                
                test('2. Dashboard  -- 101-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 101, 101, vars)
                })
                            
                
                test('2. Dashboard  -- 102-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 102, 102, vars)
                })
                            
                
                test('2. Dashboard  -- 103-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 103, 103, vars)
                })
                            
                
                test('2. Dashboard  -- 104-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 104, 104, vars)
                })
                            
                
                test('2. Dashboard  -- 105-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 105, 105, vars)
                })
                            
                
                test('2. Dashboard  -- 106-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 106, 106, vars)
                })
                            
                
                test('2. Dashboard  -- 107-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 107, 107, vars)
                })
                            
                
                test('2. Dashboard  -- 108-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 108, 108, vars)
                })
                            
                
                test('2. Dashboard  -- 109-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 109, 109, vars)
                })
                            
                
                test('2. Dashboard  -- 110-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 110, 110, vars)
                })
                            
                
                test('2. Dashboard  -- 111-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 111, 111, vars)
                })
                            
                
                test('2. Dashboard  -- 112-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 112, 112, vars)
                })
                            
                
                test('2. Dashboard  -- 113-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 113, 113, vars)
                })
                            
                
                test('2. Dashboard  -- 114-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 114, 114, vars)
                })
                            
                
                test('2. Dashboard  -- 115-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 115, 115, vars)
                })
                            
                
                test('2. Dashboard  -- 116-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 116, 116, vars)
                })
                            
                
                test('2. Dashboard  -- 117-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 117, 117, vars)
                })
                            
                
                test('2. Dashboard  -- 118-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 118, 118, vars)
                })
                            
                
                test('2. Dashboard  -- 119-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 119, 119, vars)
                })
                            
                
                test('2. Dashboard  -- 120-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 120, 120, vars)
                })
                            
                
                test('2. Dashboard  -- 121-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 121, 121, vars)
                })
                            
                
                test('2. Dashboard  -- 122-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 122, 122, vars)
                })
                            
                
                test('2. Dashboard  -- 123-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 123, 123, vars)
                })
                            
                
                test('2. Dashboard  -- 124-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 124, 124, vars)
                })
                            
                
                test('2. Dashboard  -- 125-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 125, 125, vars)
                })
                            
                
                test('2. Dashboard  -- 126-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 126, 126, vars)
                })
                            
                
                test('2. Dashboard  -- 127-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 127, 127, vars)
                })
                            
                
                test('2. Dashboard  -- 128-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 128, 128, vars)
                })
                            
                
                test('2. Dashboard  -- 129-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 129, 129, vars)
                })
                            
                
                test('2. Dashboard  -- 130-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 130, 130, vars)
                })
                            
                
                test('2. Dashboard  -- 131-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 131, 131, vars)
                })
                            
                
                test('2. Dashboard  -- 132-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 132, 132, vars)
                })
                            
                
                test('2. Dashboard  -- 133-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('2. Dashboard'), page, ctx, testInfo, 133, 133, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 4. Budget',()=>{
                  logAll()
                  logAll('Running sheet: 4. Budget - 43 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('4. Budget  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('4. Budget  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('4. Budget  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('4. Budget  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('4. Budget  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('4. Budget  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('4. Budget  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('4. Budget  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('4. Budget  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('4. Budget  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('4. Budget  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('4. Budget  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('4. Budget  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('4. Budget  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('4. Budget  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('4. Budget  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('4. Budget  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('4. Budget  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('4. Budget  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('4. Budget  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('4. Budget  -- 022-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('4. Budget  -- 023-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('4. Budget  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('4. Budget  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('4. Budget  -- 026-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('4. Budget  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('4. Budget  -- 028-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('4. Budget  -- 029-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('4. Budget  -- 030-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('4. Budget  -- 031-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('4. Budget  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('4. Budget  -- 033-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('4. Budget  -- 034-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('4. Budget  -- 035-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('4. Budget  -- 036-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('4. Budget  -- 037-files', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('4. Budget  -- 038-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('4. Budget  -- 039-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 39, 39, vars)
                })
                            
                
                test('4. Budget  -- 040-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 40, 40, vars)
                })
                            
                
                test('4. Budget  -- 041-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                test('4. Budget  -- 042-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 42, 42, vars)
                })
                            
                
                test('4. Budget  -- 043-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('4. Budget'), page, ctx, testInfo, 43, 43, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 5. Reporting',()=>{
                  logAll()
                  logAll('Running sheet: 5. Reporting - 250 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('5. Reporting  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('5. Reporting  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('5. Reporting  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('5. Reporting  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('5. Reporting  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('5. Reporting  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('5. Reporting  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('5. Reporting  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('5. Reporting  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('5. Reporting  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('5. Reporting  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('5. Reporting  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('5. Reporting  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('5. Reporting  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('5. Reporting  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('5. Reporting  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('5. Reporting  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('5. Reporting  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('5. Reporting  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('5. Reporting  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('5. Reporting  -- 022-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('5. Reporting  -- 023-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('5. Reporting  -- 024-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('5. Reporting  -- 025-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('5. Reporting  -- 026-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('5. Reporting  -- 027-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('5. Reporting  -- 028-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('5. Reporting  -- 029-select', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('5. Reporting  -- 030-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('5. Reporting  -- 031-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('5. Reporting  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('5. Reporting  -- 033-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('5. Reporting  -- 034-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('5. Reporting  -- 035-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('5. Reporting  -- 036-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('5. Reporting  -- 037-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('5. Reporting  -- 038-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('5. Reporting  -- 039-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 39, 39, vars)
                })
                            
                
                test('5. Reporting  -- 040-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 40, 40, vars)
                })
                            
                
                test('5. Reporting  -- 041-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                test('5. Reporting  -- 042-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 42, 42, vars)
                })
                            
                
                test('5. Reporting  -- 043-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 43, 43, vars)
                })
                            
                
                test('5. Reporting  -- 044-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 44, 44, vars)
                })
                            
                
                test('5. Reporting  -- 045-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 45, 45, vars)
                })
                            
                
                test('5. Reporting  -- 046-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 46, 46, vars)
                })
                            
                
                test('5. Reporting  -- 047-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 47, 47, vars)
                })
                            
                
                test('5. Reporting  -- 048-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 48, 48, vars)
                })
                            
                
                test('5. Reporting  -- 049-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 49, 49, vars)
                })
                            
                
                test('5. Reporting  -- 050-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 50, 50, vars)
                })
                            
                
                test('5. Reporting  -- 051-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 51, 51, vars)
                })
                            
                
                test('5. Reporting  -- 052-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 52, 52, vars)
                })
                            
                
                test('5. Reporting  -- 053-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 53, 53, vars)
                })
                            
                
                test('5. Reporting  -- 054-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 54, 54, vars)
                })
                            
                
                test('5. Reporting  -- 055-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 55, 55, vars)
                })
                            
                
                test('5. Reporting  -- 056-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 56, 56, vars)
                })
                            
                
                test('5. Reporting  -- 057-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 57, 57, vars)
                })
                            
                
                test('5. Reporting  -- 058-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 58, 58, vars)
                })
                            
                
                test('5. Reporting  -- 059-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 59, 59, vars)
                })
                            
                
                test('5. Reporting  -- 060-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 60, 60, vars)
                })
                            
                
                test('5. Reporting  -- 061-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 61, 61, vars)
                })
                            
                
                test('5. Reporting  -- 062-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 62, 62, vars)
                })
                            
                
                test('5. Reporting  -- 063-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 63, 63, vars)
                })
                            
                
                test('5. Reporting  -- 064-select', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 64, 64, vars)
                })
                            
                
                test('5. Reporting  -- 065-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 65, 65, vars)
                })
                            
                
                test('5. Reporting  -- 066-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 66, 66, vars)
                })
                            
                
                test('5. Reporting  -- 067-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 67, 67, vars)
                })
                            
                
                test('5. Reporting  -- 068-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 68, 68, vars)
                })
                            
                
                test('5. Reporting  -- 069-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 69, 69, vars)
                })
                            
                
                test('5. Reporting  -- 070-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 70, 70, vars)
                })
                            
                
                test('5. Reporting  -- 071-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 71, 71, vars)
                })
                            
                
                test('5. Reporting  -- 072-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 72, 72, vars)
                })
                            
                
                test('5. Reporting  -- 073-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 73, 73, vars)
                })
                            
                
                test('5. Reporting  -- 074-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 74, 74, vars)
                })
                            
                
                test('5. Reporting  -- 075-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 75, 76, vars)
                })
                            
                
                test('5. Reporting  -- 077-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 77, 77, vars)
                })
                            
                
                test('5. Reporting  -- 078-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 78, 78, vars)
                })
                            
                
                test('5. Reporting  -- 079-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 79, 79, vars)
                })
                            
                
                test('5. Reporting  -- 080-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 80, 80, vars)
                })
                            
                
                test('5. Reporting  -- 081-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 81, 81, vars)
                })
                            
                
                test('5. Reporting  -- 082-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 82, 82, vars)
                })
                            
                
                test('5. Reporting  -- 083-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 83, 83, vars)
                })
                            
                
                test('5. Reporting  -- 084-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 84, 84, vars)
                })
                            
                
                test('5. Reporting  -- 085-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 85, 85, vars)
                })
                            
                
                test('5. Reporting  -- 086-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 86, 86, vars)
                })
                            
                
                test('5. Reporting  -- 087-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 87, 87, vars)
                })
                            
                
                test('5. Reporting  -- 088-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 88, 89, vars)
                })
                            
                
                test('5. Reporting  -- 090-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 90, 90, vars)
                })
                            
                
                test('5. Reporting  -- 091-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 91, 91, vars)
                })
                            
                
                test('5. Reporting  -- 092-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 92, 92, vars)
                })
                            
                
                test('5. Reporting  -- 093-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 93, 93, vars)
                })
                            
                
                test('5. Reporting  -- 094-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 94, 94, vars)
                })
                            
                
                test('5. Reporting  -- 095-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 95, 95, vars)
                })
                            
                
                test('5. Reporting  -- 096-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 96, 96, vars)
                })
                            
                
                test('5. Reporting  -- 097-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 97, 97, vars)
                })
                            
                
                test('5. Reporting  -- 098-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 98, 98, vars)
                })
                            
                
                test('5. Reporting  -- 099-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 99, 99, vars)
                })
                            
                
                test('5. Reporting  -- 100-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 100, 100, vars)
                })
                            
                
                test('5. Reporting  -- 101-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 101, 102, vars)
                })
                            
                
                test('5. Reporting  -- 103-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 103, 103, vars)
                })
                            
                
                test('5. Reporting  -- 104-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 104, 104, vars)
                })
                            
                
                test('5. Reporting  -- 105-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 105, 105, vars)
                })
                            
                
                test('5. Reporting  -- 106-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 106, 106, vars)
                })
                            
                
                test('5. Reporting  -- 107-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 107, 107, vars)
                })
                            
                
                test('5. Reporting  -- 108-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 108, 108, vars)
                })
                            
                
                test('5. Reporting  -- 109-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 109, 109, vars)
                })
                            
                
                test('5. Reporting  -- 110-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 110, 110, vars)
                })
                            
                
                test('5. Reporting  -- 111-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 111, 111, vars)
                })
                            
                
                test('5. Reporting  -- 112-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 112, 112, vars)
                })
                            
                
                test('5. Reporting  -- 113-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 113, 113, vars)
                })
                            
                
                test('5. Reporting  -- 114-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 114, 114, vars)
                })
                            
                
                test('5. Reporting  -- 115-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 115, 115, vars)
                })
                            
                
                test('5. Reporting  -- 116-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 116, 116, vars)
                })
                            
                
                test('5. Reporting  -- 117-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 117, 117, vars)
                })
                            
                
                test('5. Reporting  -- 118-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 118, 118, vars)
                })
                            
                
                test('5. Reporting  -- 119-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 119, 119, vars)
                })
                            
                
                test('5. Reporting  -- 120-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 120, 120, vars)
                })
                            
                
                test('5. Reporting  -- 121-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 121, 121, vars)
                })
                            
                
                test('5. Reporting  -- 122-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 122, 122, vars)
                })
                            
                
                test('5. Reporting  -- 123-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 123, 123, vars)
                })
                            
                
                test('5. Reporting  -- 124-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 124, 124, vars)
                })
                            
                
                test('5. Reporting  -- 125-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 125, 125, vars)
                })
                            
                
                test('5. Reporting  -- 126-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 126, 127, vars)
                })
                            
                
                test('5. Reporting  -- 128-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 128, 128, vars)
                })
                            
                
                test('5. Reporting  -- 129-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 129, 129, vars)
                })
                            
                
                test('5. Reporting  -- 130-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 130, 130, vars)
                })
                            
                
                test('5. Reporting  -- 131-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 131, 132, vars)
                })
                            
                
                test('5. Reporting  -- 133-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 133, 133, vars)
                })
                            
                
                test('5. Reporting  -- 134-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 134, 134, vars)
                })
                            
                
                test('5. Reporting  -- 135-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 135, 135, vars)
                })
                            
                
                test('5. Reporting  -- 136-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 136, 136, vars)
                })
                            
                
                test('5. Reporting  -- 137-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 137, 137, vars)
                })
                            
                
                test('5. Reporting  -- 138-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 138, 138, vars)
                })
                            
                
                test('5. Reporting  -- 139-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 139, 139, vars)
                })
                            
                
                test('5. Reporting  -- 140-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 140, 140, vars)
                })
                            
                
                test('5. Reporting  -- 141-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 141, 141, vars)
                })
                            
                
                test('5. Reporting  -- 142-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 142, 143, vars)
                })
                            
                
                test('5. Reporting  -- 144-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 144, 144, vars)
                })
                            
                
                test('5. Reporting  -- 145-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 145, 145, vars)
                })
                            
                
                test('5. Reporting  -- 146-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 146, 146, vars)
                })
                            
                
                test('5. Reporting  -- 147-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 147, 147, vars)
                })
                            
                
                test('5. Reporting  -- 148-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 148, 148, vars)
                })
                            
                
                test('5. Reporting  -- 149-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 149, 149, vars)
                })
                            
                
                test('5. Reporting  -- 150-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 150, 150, vars)
                })
                            
                
                test('5. Reporting  -- 151-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 151, 151, vars)
                })
                            
                
                test('5. Reporting  -- 152-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 152, 152, vars)
                })
                            
                
                test('5. Reporting  -- 153-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 153, 153, vars)
                })
                            
                
                test('5. Reporting  -- 154-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 154, 154, vars)
                })
                            
                
                test('5. Reporting  -- 155-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 155, 155, vars)
                })
                            
                
                test('5. Reporting  -- 156-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 156, 157, vars)
                })
                            
                
                test('5. Reporting  -- 158-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 158, 158, vars)
                })
                            
                
                test('5. Reporting  -- 159-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 159, 159, vars)
                })
                            
                
                test('5. Reporting  -- 160-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 160, 160, vars)
                })
                            
                
                test('5. Reporting  -- 161-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 161, 161, vars)
                })
                            
                
                test('5. Reporting  -- 162-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 162, 162, vars)
                })
                            
                
                test('5. Reporting  -- 163-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 163, 163, vars)
                })
                            
                
                test('5. Reporting  -- 164-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 164, 164, vars)
                })
                            
                
                test('5. Reporting  -- 165-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 165, 165, vars)
                })
                            
                
                test('5. Reporting  -- 166-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 166, 166, vars)
                })
                            
                
                test('5. Reporting  -- 167-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 167, 167, vars)
                })
                            
                
                test('5. Reporting  -- 168-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 168, 168, vars)
                })
                            
                
                test('5. Reporting  -- 169-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 169, 169, vars)
                })
                            
                
                test('5. Reporting  -- 170-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 170, 170, vars)
                })
                            
                
                test('5. Reporting  -- 171-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 171, 171, vars)
                })
                            
                
                test('5. Reporting  -- 172-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 172, 173, vars)
                })
                            
                
                test('5. Reporting  -- 174-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 174, 174, vars)
                })
                            
                
                test('5. Reporting  -- 175-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 175, 175, vars)
                })
                            
                
                test('5. Reporting  -- 176-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 176, 176, vars)
                })
                            
                
                test('5. Reporting  -- 177-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 177, 177, vars)
                })
                            
                
                test('5. Reporting  -- 178-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 178, 178, vars)
                })
                            
                
                test('5. Reporting  -- 179-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 179, 179, vars)
                })
                            
                
                test('5. Reporting  -- 180-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 180, 180, vars)
                })
                            
                
                test('5. Reporting  -- 181-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 181, 181, vars)
                })
                            
                
                test('5. Reporting  -- 182-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 182, 182, vars)
                })
                            
                
                test('5. Reporting  -- 183-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 183, 183, vars)
                })
                            
                
                test('5. Reporting  -- 184-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 184, 184, vars)
                })
                            
                
                test('5. Reporting  -- 185-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 185, 185, vars)
                })
                            
                
                test('5. Reporting  -- 186-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 186, 186, vars)
                })
                            
                
                test('5. Reporting  -- 187-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 187, 187, vars)
                })
                            
                
                test('5. Reporting  -- 188-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 188, 188, vars)
                })
                            
                
                test('5. Reporting  -- 189-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 189, 189, vars)
                })
                            
                
                test('5. Reporting  -- 190-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 190, 190, vars)
                })
                            
                
                test('5. Reporting  -- 191-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 191, 191, vars)
                })
                            
                
                test('5. Reporting  -- 192-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 192, 192, vars)
                })
                            
                
                test('5. Reporting  -- 193-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 193, 193, vars)
                })
                            
                
                test('5. Reporting  -- 194-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 194, 194, vars)
                })
                            
                
                test('5. Reporting  -- 195-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 195, 195, vars)
                })
                            
                
                test('5. Reporting  -- 196-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 196, 196, vars)
                })
                            
                
                test('5. Reporting  -- 197-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 197, 197, vars)
                })
                            
                
                test('5. Reporting  -- 198-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 198, 198, vars)
                })
                            
                
                test('5. Reporting  -- 199-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 199, 199, vars)
                })
                            
                
                test('5. Reporting  -- 200-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 200, 200, vars)
                })
                            
                
                test('5. Reporting  -- 201-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 201, 201, vars)
                })
                            
                
                test('5. Reporting  -- 202-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 202, 202, vars)
                })
                            
                
                test('5. Reporting  -- 203-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 203, 203, vars)
                })
                            
                
                test('5. Reporting  -- 204-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 204, 204, vars)
                })
                            
                
                test('5. Reporting  -- 205-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 205, 205, vars)
                })
                            
                
                test('5. Reporting  -- 206-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 206, 206, vars)
                })
                            
                
                test('5. Reporting  -- 207-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 207, 207, vars)
                })
                            
                
                test('5. Reporting  -- 208-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 208, 208, vars)
                })
                            
                
                test('5. Reporting  -- 209-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 209, 209, vars)
                })
                            
                
                test('5. Reporting  -- 210-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 210, 211, vars)
                })
                            
                
                test('5. Reporting  -- 212-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 212, 212, vars)
                })
                            
                
                test('5. Reporting  -- 213-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 213, 213, vars)
                })
                            
                
                test('5. Reporting  -- 214-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 214, 214, vars)
                })
                            
                
                test('5. Reporting  -- 215-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 215, 215, vars)
                })
                            
                
                test('5. Reporting  -- 216-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 216, 216, vars)
                })
                            
                
                test('5. Reporting  -- 217-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 217, 217, vars)
                })
                            
                
                test('5. Reporting  -- 218-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 218, 218, vars)
                })
                            
                
                test('5. Reporting  -- 219-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 219, 219, vars)
                })
                            
                
                test('5. Reporting  -- 220-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 220, 220, vars)
                })
                            
                
                test('5. Reporting  -- 221-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 221, 222, vars)
                })
                            
                
                test('5. Reporting  -- 223-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 223, 223, vars)
                })
                            
                
                test('5. Reporting  -- 224-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 224, 224, vars)
                })
                            
                
                test('5. Reporting  -- 225-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 225, 225, vars)
                })
                            
                
                test('5. Reporting  -- 226-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 226, 226, vars)
                })
                            
                
                test('5. Reporting  -- 227-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 227, 227, vars)
                })
                            
                
                test('5. Reporting  -- 228-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 228, 228, vars)
                })
                            
                
                test('5. Reporting  -- 229-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 229, 229, vars)
                })
                            
                
                test('5. Reporting  -- 230-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 230, 230, vars)
                })
                            
                
                test('5. Reporting  -- 231-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 231, 231, vars)
                })
                            
                
                test('5. Reporting  -- 232-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 232, 232, vars)
                })
                            
                
                test('5. Reporting  -- 233-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 233, 233, vars)
                })
                            
                
                test('5. Reporting  -- 234-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 234, 234, vars)
                })
                            
                
                test('5. Reporting  -- 235-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 235, 236, vars)
                })
                            
                
                test('5. Reporting  -- 237-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 237, 237, vars)
                })
                            
                
                test('5. Reporting  -- 238-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 238, 238, vars)
                })
                            
                
                test('5. Reporting  -- 239-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 239, 239, vars)
                })
                            
                
                test('5. Reporting  -- 240-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 240, 240, vars)
                })
                            
                
                test('5. Reporting  -- 241-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 241, 241, vars)
                })
                            
                
                test('5. Reporting  -- 242-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 242, 242, vars)
                })
                            
                
                test('5. Reporting  -- 243-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 243, 243, vars)
                })
                            
                
                test('5. Reporting  -- 244-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 244, 244, vars)
                })
                            
                
                test('5. Reporting  -- 245-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 245, 245, vars)
                })
                            
                
                test('5. Reporting  -- 246-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 246, 246, vars)
                })
                            
                
                test('5. Reporting  -- 247-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 247, 247, vars)
                })
                            
                
                test('5. Reporting  -- 248-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 248, 248, vars)
                })
                            
                
                test('5. Reporting  -- 249-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 249, 249, vars)
                })
                            
                
                test('5. Reporting  -- 250-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('5. Reporting'), page, ctx, testInfo, 250, 250, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 6. COGS',()=>{
                  logAll()
                  logAll('Running sheet: 6. COGS - 30 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('6. COGS  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('6. COGS  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('6. COGS  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('6. COGS  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('6. COGS  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('6. COGS  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('6. COGS  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('6. COGS  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('6. COGS  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('6. COGS  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('6. COGS  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('6. COGS  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('6. COGS  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('6. COGS  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('6. COGS  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('6. COGS  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('6. COGS  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('6. COGS  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('6. COGS  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('6. COGS  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('6. COGS  -- 022-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('6. COGS  -- 023-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('6. COGS  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('6. COGS  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('6. COGS  -- 026-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('6. COGS  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('6. COGS  -- 028-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('6. COGS  -- 029-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('6. COGS  -- 030-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('6. COGS'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 7. Search Invoices',()=>{
                  logAll()
                  logAll('Running sheet: 7. Search Invoices - 48 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('7. Search Invoices  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('7. Search Invoices  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('7. Search Invoices  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('7. Search Invoices  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('7. Search Invoices  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('7. Search Invoices  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('7. Search Invoices  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('7. Search Invoices  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('7. Search Invoices  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('7. Search Invoices  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('7. Search Invoices  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('7. Search Invoices  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('7. Search Invoices  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('7. Search Invoices  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('7. Search Invoices  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('7. Search Invoices  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('7. Search Invoices  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('7. Search Invoices  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('7. Search Invoices  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('7. Search Invoices  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 21, 22, vars)
                })
                            
                
                test('7. Search Invoices  -- 023-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('7. Search Invoices  -- 024-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('7. Search Invoices  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('7. Search Invoices  -- 026-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('7. Search Invoices  -- 027-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('7. Search Invoices  -- 028-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('7. Search Invoices  -- 029-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('7. Search Invoices  -- 030-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('7. Search Invoices  -- 031-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('7. Search Invoices  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('7. Search Invoices  -- 033-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('7. Search Invoices  -- 034-var', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('7. Search Invoices  -- 035-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('7. Search Invoices  -- 036-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('7. Search Invoices  -- 037-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('7. Search Invoices  -- 038-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('7. Search Invoices  -- 039-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 39, 40, vars)
                })
                            
                
                test('7. Search Invoices  -- 041-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                test('7. Search Invoices  -- 042-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 42, 42, vars)
                })
                            
                
                test('7. Search Invoices  -- 043-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 43, 43, vars)
                })
                            
                
                test('7. Search Invoices  -- 044-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 44, 44, vars)
                })
                            
                
                test('7. Search Invoices  -- 045-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 45, 45, vars)
                })
                            
                
                test('7. Search Invoices  -- 046-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 46, 46, vars)
                })
                            
                
                test('7. Search Invoices  -- 047-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 47, 47, vars)
                })
                            
                
                test('7. Search Invoices  -- 048-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('7. Search Invoices'), page, ctx, testInfo, 48, 48, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 9. Reconciliation',()=>{
                  logAll()
                  logAll('Running sheet: 9. Reconciliation - 37 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('9. Reconciliation  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('9. Reconciliation  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('9. Reconciliation  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('9. Reconciliation  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('9. Reconciliation  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('9. Reconciliation  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('9. Reconciliation  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('9. Reconciliation  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('9. Reconciliation  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('9. Reconciliation  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('9. Reconciliation  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('9. Reconciliation  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('9. Reconciliation  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('9. Reconciliation  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('9. Reconciliation  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('9. Reconciliation  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('9. Reconciliation  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('9. Reconciliation  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('9. Reconciliation  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('9. Reconciliation  -- 021-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('9. Reconciliation  -- 022-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 22, 23, vars)
                })
                            
                
                test('9. Reconciliation  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('9. Reconciliation  -- 025-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('9. Reconciliation  -- 026-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('9. Reconciliation  -- 027-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('9. Reconciliation  -- 028-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('9. Reconciliation  -- 029-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('9. Reconciliation  -- 030-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('9. Reconciliation  -- 031-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('9. Reconciliation  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('9. Reconciliation  -- 033-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('9. Reconciliation  -- 034-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('9. Reconciliation  -- 035-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('9. Reconciliation  -- 036-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('9. Reconciliation  -- 037-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('9. Reconciliation'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 10. Extract Monitor',()=>{
                  logAll()
                  logAll('Running sheet: 10. Extract Monitor - 42 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('10. Extract Monitor  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('10. Extract Monitor  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('10. Extract Monitor  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('10. Extract Monitor  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('10. Extract Monitor  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('10. Extract Monitor  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('10. Extract Monitor  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('10. Extract Monitor  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('10. Extract Monitor  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('10. Extract Monitor  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('10. Extract Monitor  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('10. Extract Monitor  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('10. Extract Monitor  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('10. Extract Monitor  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('10. Extract Monitor  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('10. Extract Monitor  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('10. Extract Monitor  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('10. Extract Monitor  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('10. Extract Monitor  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('10. Extract Monitor  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('10. Extract Monitor  -- 022-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('10. Extract Monitor  -- 023-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('10. Extract Monitor  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('10. Extract Monitor  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('10. Extract Monitor  -- 026-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('10. Extract Monitor  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('10. Extract Monitor  -- 028-key:enter', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('10. Extract Monitor  -- 029-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('10. Extract Monitor  -- 030-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('10. Extract Monitor  -- 031-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('10. Extract Monitor  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('10. Extract Monitor  -- 033-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('10. Extract Monitor  -- 034-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('10. Extract Monitor  -- 035-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('10. Extract Monitor  -- 036-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('10. Extract Monitor  -- 037-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('10. Extract Monitor  -- 038-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('10. Extract Monitor  -- 039-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 39, 39, vars)
                })
                            
                
                test('10. Extract Monitor  -- 040-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 40, 40, vars)
                })
                            
                
                test('10. Extract Monitor  -- 041-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                test('10. Extract Monitor  -- 042-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('10. Extract Monitor'), page, ctx, testInfo, 42, 42, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 12. Product Verification',()=>{
                  logAll()
                  logAll('Running sheet: 12. Product Verification - 38 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('12. Product Verification  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('12. Product Verification  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('12. Product Verification  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('12. Product Verification  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('12. Product Verification  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('12. Product Verification  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('12. Product Verification  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('12. Product Verification  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('12. Product Verification  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('12. Product Verification  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('12. Product Verification  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('12. Product Verification  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('12. Product Verification  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('12. Product Verification  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('12. Product Verification  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('12. Product Verification  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('12. Product Verification  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('12. Product Verification  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('12. Product Verification  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('12. Product Verification  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('12. Product Verification  -- 022-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('12. Product Verification  -- 023-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('12. Product Verification  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('12. Product Verification  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('12. Product Verification  -- 026-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('12. Product Verification  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('12. Product Verification  -- 028-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('12. Product Verification  -- 029-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('12. Product Verification  -- 030-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('12. Product Verification  -- 031-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('12. Product Verification  -- 032-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('12. Product Verification  -- 033-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('12. Product Verification  -- 034-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('12. Product Verification  -- 035-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('12. Product Verification  -- 036-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('12. Product Verification  -- 037-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('12. Product Verification  -- 038-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('12. Product Verification'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 13. Map Products',()=>{
                  logAll()
                  logAll('Running sheet: 13. Map Products - 41 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('13. Map Products  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('13. Map Products  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('13. Map Products  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('13. Map Products  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('13. Map Products  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('13. Map Products  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('13. Map Products  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('13. Map Products  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('13. Map Products  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('13. Map Products  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('13. Map Products  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('13. Map Products  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('13. Map Products  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('13. Map Products  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('13. Map Products  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('13. Map Products  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('13. Map Products  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('13. Map Products  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('13. Map Products  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('13. Map Products  -- 021-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('13. Map Products  -- 022-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('13. Map Products  -- 023-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('13. Map Products  -- 024-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('13. Map Products  -- 025-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('13. Map Products  -- 026-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('13. Map Products  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('13. Map Products  -- 028-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('13. Map Products  -- 029-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('13. Map Products  -- 030-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('13. Map Products  -- 031-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('13. Map Products  -- 032-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('13. Map Products  -- 033-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('13. Map Products  -- 034-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('13. Map Products  -- 035-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('13. Map Products  -- 036-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('13. Map Products  -- 037-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('13. Map Products  -- 038-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('13. Map Products  -- 039-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 39, 39, vars)
                })
                            
                
                test('13. Map Products  -- 040-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 40, 40, vars)
                })
                            
                
                test('13. Map Products  -- 041-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('13. Map Products'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet 15. Statements',()=>{
                  logAll()
                  logAll('Running sheet: 15. Statements - 43 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('15. Statements  -- 002-url', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 2, 2, vars)
                })
                            
                
                test('15. Statements  -- 003-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 3, 3, vars)
                })
                            
                
                test('15. Statements  -- 004-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 4, 4, vars)
                })
                            
                
                test('15. Statements  -- 005-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 5, 5, vars)
                })
                            
                
                test('15. Statements  -- 006-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 6, 6, vars)
                })
                            
                
                test('15. Statements  -- 007-wait', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 7, 7, vars)
                })
                            
                
                test('15. Statements  -- 008-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 8, 8, vars)
                })
                            
                
                test('15. Statements  -- 009-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 9, 9, vars)
                })
                            
                
                test('15. Statements  -- 010-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 10, 10, vars)
                })
                            
                
                test('15. Statements  -- 011-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 11, 11, vars)
                })
                            
                
                test('15. Statements  -- 012-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 12, 12, vars)
                })
                            
                
                test('15. Statements  -- 013-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 13, 13, vars)
                })
                            
                
                test('15. Statements  -- 014-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 14, 14, vars)
                })
                            
                
                test('15. Statements  -- 015-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 15, 15, vars)
                })
                            
                
                test('15. Statements  -- 016-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 16, 16, vars)
                })
                            
                
                test('15. Statements  -- 017-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 17, 17, vars)
                })
                            
                
                test('15. Statements  -- 018-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 18, 18, vars)
                })
                            
                
                test('15. Statements  -- 019-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 19, 19, vars)
                })
                            
                
                test('15. Statements  -- 020-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 20, 20, vars)
                })
                            
                
                test('15. Statements  -- 021-assert', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 21, 21, vars)
                })
                            
                
                test('15. Statements  -- 022-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 22, 22, vars)
                })
                            
                
                test('15. Statements  -- 023-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 23, 23, vars)
                })
                            
                
                test('15. Statements  -- 024-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 24, 24, vars)
                })
                            
                
                test('15. Statements  -- 025-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 25, 25, vars)
                })
                            
                
                test('15. Statements  -- 026-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 26, 26, vars)
                })
                            
                
                test('15. Statements  -- 027-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 27, 27, vars)
                })
                            
                
                test('15. Statements  -- 028-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 28, 28, vars)
                })
                            
                
                test('15. Statements  -- 029-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 29, 29, vars)
                })
                            
                
                test('15. Statements  -- 030-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 30, 30, vars)
                })
                            
                
                test('15. Statements  -- 031-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 31, 31, vars)
                })
                            
                
                test('15. Statements  -- 032-keys', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 32, 32, vars)
                })
                            
                
                test('15. Statements  -- 033-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 33, 33, vars)
                })
                            
                
                test('15. Statements  -- 034-file', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 34, 34, vars)
                })
                            
                
                test('15. Statements  -- 035-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 35, 35, vars)
                })
                            
                
                test('15. Statements  -- 036-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 36, 36, vars)
                })
                            
                
                test('15. Statements  -- 037-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 37, 37, vars)
                })
                            
                
                test('15. Statements  -- 038-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 38, 38, vars)
                })
                            
                
                test('15. Statements  -- 039-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 39, 39, vars)
                })
                            
                
                test('15. Statements  -- 040-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 40, 40, vars)
                })
                            
                
                test('15. Statements  -- 041-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 41, 41, vars)
                })
                            
                
                test('15. Statements  -- 042-click', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 42, 42, vars)
                })
                            
                
                test('15. Statements  -- 043-sleep', async({}, testInfo)=>{
                  await runSheet(wb.getWorksheet('15. Statements'), page, ctx, testInfo, 43, 43, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                

})
