const messages = {
	nl: {
		translations: {
			signup: {
				title: "Aanmelden",
				toasts: {
					success: "Gebruiker succesvol aangemaakt! Log alstublieft in!",
					fail: "Fout bij het aanmaken van gebruiker. Controleer de ingevoerde gegevens.",
				},
				form: {
					name: "Naam",
					email: "E-mailadres",
					password: "Wachtwoord",
				},
				buttons: {
					submit: "Registreren",
					login: "Heeft u al een account? Inloggen!",
				},
			},
			login: {
				title: "Inloggen",
				form: {
					email: "E-mailadres",
					password: "Wachtwoord",
				},
				buttons: {
					submit: "Invoeren",
					register: "Heeft u geen account? Registreer!",
				},
			},
			auth: {
				toasts: {
					success: "Succesvol ingelogd!",
				},
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Tickets vandaag: ",
					},
				},
			},
			connections: {
				title: "Verbindingen",
				toasts: {
					deleted: "WhatsApp-verbinding succesvol verwijderd!",
				},
				confirmationModal: {
					deleteTitle: "Verwijderen",
					deleteMessage: "Weet u het zeker? Dit kan niet ongedaan worden gemaakt.",
					disconnectTitle: "Verbinding verbreken",
					disconnectMessage:
						"Weet u het zeker? U zult opnieuw de QR-code moeten scannen.",
				},
				buttons: {
					add: "WhatsApp toevoegen",
					disconnect: "Verbinding verbreken",
					tryAgain: "Opnieuw proberen",
					qrcode: "QR-CODE",
					newQr: "Nieuwe QR-CODE",
					connecting: "Bezig met verbinden",
				},
				toolTips: {
					disconnected: {
						title: "Kon WhatsApp-sessie niet starten",
						content:
							"Zorg ervoor dat uw telefoon met internet is verbonden en probeer het opnieuw, of vraag een nieuwe QR-code aan",
					},
					qrcode: {
						title: "Wachten tot de QR-code wordt gescand",
						content:
							"Klik op de knop 'QR-CODE' en scan de QR-code met uw telefoon om de sessie te starten",
					},
					connected: {
						title: "Verbinding tot stand gebracht",
					},
					timeout: {
						title: "Verbinding met de telefoon is verbroken",
						content:
							"Zorg ervoor dat uw telefoon met internet is verbonden en WhatsApp geopend is, of klik op 'Verbinding verbreken' om een nieuwe QR-code te krijgen",
					},
				},
				table: {
					name: "Naam",
					status: "Status",
					lastUpdate: "Laatst bijgewerkt",
					default: "Standaard",
					actions: "Acties",
					session: "Sesssie",
				},
			},
			whatsappModal: {
				title: {
					add: "WhatsApp toevoegen",
					edit: "WhatsApp bewerken",
				},
				form: {
					name: "Naam",
					default: "Standaard",
				},
				buttons: {
					okAdd: "Toevoegen",
					okEdit: "Opslaan",
					cancel: "Annuleren",
				},
				success: "WhatsApp succesvol opgeslagen.",
			},
			qrCode: {
				message: "Scan de QR-code om de sessie te starten",
			},
			contacts: {
				title: "Contacten",
				toasts: {
					deleted: "Contact succesvol verwijderd!",
				},
				searchPlaceholder: "Zoeken ...",
				confirmationModal: {
					deleteTitle: "Verwijderen",
					importTitlte: "Contacten importeren",
					deleteMessage:
						"Weet u zeker dat u dit contact wilt verwijderen? Alle gerelateerde tickets gaan verloren.",
					importMessage: "Wilt u alle contacten van de telefoon importeren?",
				},
				buttons: {
					import: "Contacten importeren",
					add: "Contact toevoegen",
				},
				table: {
					name: "Naam",
					whatsapp: "WhatsApp",
					email: "E-mailadres",
					actions: "Acties",
				},
			},
			contactModal: {
				title: {
					add: "Contact toevoegen",
					edit: "Contact bewerken",
				},
				form: {
					mainInfo: "Contactgegevens",
					extraInfo: "Aanvullende informatie",
					name: "Naam",
					number: "WhatsApp-nummer",
					email: "E-mailadres",
					extraName: "Veldnaam",
					extraValue: "Waarde",
				},
				buttons: {
					addExtraInfo: "Informatie toevoegen",
					okAdd: "Toevoegen",
					okEdit: "Opslaan",
					cancel: "Annuleren",
				},
				success: "Contact succesvol opgeslagen.",
			},
			queueModal: {
				title: {
					add: "Wachtrij toevoegen",
					edit: "Wachtrij bewerken",
				},
				form: {
					name: "Naam",
					color: "Kleur",
					greetingMessage: "Begroetingsbericht",
				},
				buttons: {
					okAdd: "Toevoegen",
					okEdit: "Opslaan",
					cancel: "Annuleren",
				},
			},
			userModal: {
				title: {
					add: "Gebruiker toevoegen",
					edit: "Gebruiker bewerken",
				},
				form: {
					name: "Naam",
					email: "E-mailadres",
					password: "Wachtwoord",
					profile: "Profiel",
				},
				buttons: {
					okAdd: "Toevoegen",
					okEdit: "Opslaan",
					cancel: "Annuleren",
				},
				success: "Gebruiker succesvol opgeslagen.",
			},
			chat: {
				noTicketMessage: "Selecteer een ticket om te beginnen met chatten.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "Nieuw",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Wachtrijen",
			},
			tickets: {
				toasts: {
					deleted: "Het ticket waar u in zat is verwijderd.",
				},
				notification: {
					message: "Bericht van",
				},
				tabs: {
					open: { title: "Postvak IN" },
					closed: { title: "Opgelost" },
					search: { title: "Zoeken" },
				},
				search: {
					placeholder: "Zoek tickets en berichten.",
				},
				buttons: {
					showAll: "Alle",
				},
			},
			transferTicketModal: {
				title: "Ticket overdragen",
				fieldLabel: "Typ om naar gebruikers te zoeken",
				noOptions: "Geen gebruiker met deze naam gevonden",
				buttons: {
					ok: "Overdragen",
					cancel: "Annuleren",
				},
			},
			ticketsList: {
				pendingHeader: "Wachtrij",
				assignedHeader: "Bezig met",
				noTicketsTitle: "Hier is niets!",
				noTicketsMessage:
					"Geen tickets gevonden met deze status of zoekterm.",
				buttons: {
					accept: "Accepteren",
				},
			},
			newTicketModal: {
				title: "Ticket aanmaken",
				fieldLabel: "Typ om naar een contact te zoeken",
				add: "Toevoegen",
				buttons: {
					ok: "Opslaan",
					cancel: "Annuleren",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Dashboard",
					connections: "Verbindingen",
					tickets: "Tickets",
					contacts: "Contacten",
					queues: "Wachtrijen",
					administration: "Administratie",
					users: "Gebruikers",
					settings: "Instellingen",
				},
				appBar: {
					user: {
						profile: "Profiel",
						logout: "Uitloggen",
					},
				},
			},
			notifications: {
				noTickets: "Geen meldingen.",
			},
			queues: {
				title: "Wachtrijen",
				table: {
					name: "Naam",
					color: "Kleur",
					greeting: "Begroetingsbericht",
					actions: "Acties",
				},
				buttons: {
					add: "Wachtrij toevoegen",
				},
				confirmationModal: {
					deleteTitle: "Verwijderen",
					deleteMessage:
						"Weet u het zeker? Dit kan niet ongedaan worden gemaakt! Tickets in deze wachtrij blijven bestaan, maar hebben geen wachtrij meer toegewezen.",
				},
			},
			queueSelect: {
				inputLabel: "Wachtrijen",
			},
			users: {
				title: "Gebruikers",
				table: {
					name: "Naam",
					email: "E-mailadres",
					profile: "Profiel",
					actions: "Acties",
				},
				buttons: {
					add: "Gebruiker toevoegen",
				},
				toasts: {
					deleted: "Gebruiker succesvol verwijderd.",
				},
				confirmationModal: {
					deleteTitle: "Verwijderen",
					deleteMessage:
						"Alle gebruikersgegevens gaan verloren. Open tickets van deze gebruiker worden teruggezet in de wachtrij.",
				},
			},
			settings: {
				success: "Instellingen succesvol opgeslagen.",
				title: "Instellingen",
				settings: {
					userCreation: {
						name: "Gebruiker aanmaken",
						options: {
							enabled: "Ingeschakeld",
							disabled: "Uitgeschakeld",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "Toegewezen aan:",
					buttons: {
						return: "Terug",
						resolve: "Oplossen",
						reopen: "Heropenen",
						accept: "Accepteren",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Typ een bericht",
				placeholderClosed:
					"Heropen of accepteer dit ticket om een bericht te sturen.",
				signMessage: "Ondertekenen",
			},
			contactDrawer: {
				header: "Contactgegevens",
				buttons: {
					edit: "Contact bewerken",
				},
				extraInfo: "Overige informatie",
			},
			ticketOptionsMenu: {
				delete: "Verwijderen",
				transfer: "Overdragen",
				confirmationModal: {
					title: "Verwijder ticket #",
					titleFrom: "van contact ",
					message:
						"Let op! Alle bij dit ticket behorende berichten gaan verloren.",
				},
				buttons: {
					delete: "Verwijderen",
					cancel: "Annuleren",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Annuleren",
				},
			},
			messageOptionsMenu: {
				delete: "Verwijderen",
				reply: "Antwoorden",
				confirmationModal: {
					title: "Bericht verwijderen?",
					message: "Deze actie kan niet ongedaan worden gemaakt.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP:
					"Er moet minstens één standaard WhatsApp-verbinding zijn.",
				ERR_NO_DEF_WAPP_FOUND:
					"Geen standaard WhatsApp gevonden. Controleer de verbindingspagina.",
				ERR_WAPP_NOT_INITIALIZED:
					"Deze WhatsApp-sessie is niet geïnitialiseerd. Controleer de verbindingspagina.",
				ERR_WAPP_CHECK_CONTACT:
					"Kon WhatsApp-contact niet controleren. Controleer de verbindingspagina.",
				ERR_WAPP_INVALID_CONTACT: "Dit is geen geldig WhatsApp-nummer.",
				ERR_WAPP_DOWNLOAD_MEDIA:
					"Kon media niet van WhatsApp downloaden. Controleer de verbindingspagina.",
				ERR_INVALID_CREDENTIALS: "Authenticatiefout. Probeer opnieuw.",
				ERR_SENDING_WAPP_MSG:
					"Fout bij het verzenden van WhatsApp-bericht. Controleer de verbindingspagina.",
				ERR_DELETE_WAPP_MSG: "Kon bericht niet van WhatsApp verwijderen.",
				ERR_OTHER_OPEN_TICKET:
					"Er is al een open ticket voor dit contact.",
				ERR_SESSION_EXPIRED: "Sessie verlopen. Log opnieuw in.",
				ERR_USER_CREATION_DISABLED:
					"Het aanmaken van gebruikers is uitgeschakeld door de beheerder.",
				ERR_NO_PERMISSION: "U heeft geen toestemming om deze bron te openen.",
				ERR_DUPLICATED_CONTACT: "Er bestaat al een contact met dit nummer.",
				ERR_NO_SETTING_FOUND: "Geen instelling gevonden met deze ID.",
				ERR_NO_CONTACT_FOUND: "Geen contact gevonden met deze ID.",
				ERR_NO_TICKET_FOUND: "Geen ticket gevonden met deze ID.",
				ERR_NO_USER_FOUND: "Geen gebruiker gevonden met deze ID.",
				ERR_NO_WAPP_FOUND: "Geen WhatsApp gevonden met deze ID.",
				ERR_CREATING_MESSAGE:
					"Fout bij het aanmaken van bericht in de database.",
				ERR_CREATING_TICKET:
					"Fout bij het aanmaken van ticket in de database.",
				ERR_FETCH_WAPP_MSG:
					"Fout bij het ophalen van bericht op WhatsApp, mogelijk is het te oud.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:
					"Deze kleur wordt al gebruikt, kies een andere kleur.",
				ERR_WAPP_GREETING_REQUIRED:
					"Begroetingsbericht is vereist als er meer dan één wachtrij bestaat.",
			},
		},
	},
};

export { messages };
