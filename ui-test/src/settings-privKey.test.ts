import { assert, expect } from 'chai';


// import the webdriver and the high level browser wrapper
import { ActivityBar, SideBarView, Workbench, BottomBarPanel, OutputView, WebDriver, VSBrowser, Notification, EditorView, StatusBar, By, WebView } from 'vscode-extension-tester';

const TIMEOUT_PER_SESSION = 20000;



const testFile = "ackermann.scrypt";


export async function sleep(ms: number) {
	await new Promise((res) => { setTimeout(res, ms); });
}


describe('settings-privKey.test', function () {

	let driver: WebDriver
	before(async function () {
		this.timeout(TIMEOUT_PER_SESSION);
		driver = VSBrowser.instance.driver;



	});

	after(async function () {

	});



	it('should anto show setting when deploy', async () => {

		await new Workbench().executeCommand('Start cat coding session');


		const webview: WebView = await new EditorView().openEditor('Coding Cat') as WebView;
		//const webview: WebView = new WebView();
		await webview.wait(5000);

		// first, switch inside the web view
		await webview.switchToFrame();

		
		await sleep(3000)
		const a = await webview.findElement(By.css('h1'))

		
		assert.isDefined(a)

		webview.switchBack();

	})


})

