Translator = new JS.Class({
        initialize: function(name) {
            this.name = name;
            google.load("language", "1");
        },

        function translate(text)
        {
          // Detect the language of the text.
          google.language.detect(text, function(result) {
            var detected = document.getElementById("detected");
            // If there wasn't an error in the request
            if (!result.error) {
              var langCode = result.language;
              languageCode = langCode;
              
              var langName;

              // Loop through the languages enum so that we can find the
				// actual name of the language.
              // Learn about the languages enum here:
              // http://code.google.com/apis/ajaxlanguage/documentation/reference.html#LangNameArray
              for (var i in google.language.Languages) {
                var thisLangCode = google.language.Languages[i];
                if (thisLangCode == langCode) {
                  // If we find the language code, store the language name.
                  langName = i;
                  break;
                }
              }
              
              languageName = langName;

              // Se the detected language.
              detected.innerHTML = 'Detected: "' + result.language + '" - aka "' + langName + '"';
            }
          });
          
          google.language.translate(text, languageCode, 'en', function(result) {
            
            var translated = document.getElementById("translation");
            if (result.translation) {
              translated.innerHTML = result.translation;
            }
          });
        }
    });