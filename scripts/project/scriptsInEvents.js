


const scriptsInEvents = {

		async EventSheet1_Event3(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
			
			vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
				.then(data => console.log(data.result))
				.catch(error => console.log(error));
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

