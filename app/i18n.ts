import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            "title": "Welcome {{name}}, to react using react-i18next fully type-safe",
            "description": {
                "part1": "This is a simple example.",
                "part2": "😉"
            },
            "userMessagesUnread_one": "You have {{count}} unread message.",
            "userMessagesUnread_other": "You have {{count}} unread messages."
        }
    },
    fr: {
        translation: {
            "title": "Bievenue {{name}}, to react using react-i18next fully type-safe",
            "description": {
                "part1": "This is a simple example.",
                "part2": "😉"
            },
            "userMessagesUnread_one": "You have {{count}} unread message.",
            "userMessagesUnread_other": "You have {{count}} unread messages."
        }
    }
}

i18next
    .use(initReactI18next)
    .init({
        lng: 'fr', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: resources,
        // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
        // set returnNull to false (and also in the i18next.d.ts options)
        // returnNull: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;