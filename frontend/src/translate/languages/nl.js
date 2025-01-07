const messages = {
	nl: {
	  translations: {
		signup: {
		  title: "Registreren",
		  toasts: {
			success: "Gebruiker succesvol aangemaakt! Log nu in!",
			fail: "Fout bij het aanmaken van gebruiker. Controleer de ingevoerde gegevens.",
		  },
		  form: {
			name: "Naam",
			email: "E-mail",
			password: "Wachtwoord",
		  },
		  buttons: {
			submit: "Registreren",
			login: "Heb je al een account? Log in!",
		  },
		},
		login: {
		  title: "Inloggen",
		  form: {
			email: "E-mail",
			password: "Wachtwoord",
		  },
		  buttons: {
			submit: "Inloggen",
			register: "Nog geen account? Registreer nu!",
		  },
		},
		plans: {
		  form: {
			name: "Naam",
			users: "Gebruikers",
			connections: "Verbindingen",
			campaigns: "Campagnes", 
			schedules: "Planning",
			enabled: "Ingeschakeld",
			disabled: "Uitgeschakeld",
			clear: "Annuleren",
			delete: "Verwijderen",
			save: "Opslaan",
			yes: "Ja",
			no: "Nee",
			money: "€",
		  },
		},
		companies: {
		  title: "Bedrijf registreren",
		  form: {
			name: "Bedrijfsnaam",
			plan: "Plan",
			token: "Token",
			submit: "Registreren",
			success: "Bedrijf succesvol geregistreerd!",
		  },
		},
		auth: {
		  toasts: {
			success: "Succesvol ingelogd!",
		  },
		  token: "Token",
		},
		dashboard: {
		  charts: {
			perDay: {
			  title: "Gesprekken vandaag: ",
			},
		  },
		},
		connections: {
		  title: "Verbindingen",
		  toasts: {
			deleted: "WhatsApp verbinding succesvol verwijderd!",
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Weet je het zeker? Deze actie kan niet ongedaan worden gemaakt.",
			disconnectTitle: "Verbinding verbreken",
			disconnectMessage: "Weet je het zeker? Je moet de QR-code opnieuw scannen.",
		  },
		  buttons: {
			add: "WhatsApp toevoegen",
			disconnect: "verbinding verbreken",
			tryAgain: "Opnieuw proberen",
			qrcode: "QR-CODE",
			newQr: "Nieuwe QR-CODE",
			connecting: "Verbinden",
		  },
		  toolTips: {
			disconnected: {
			  title: "Fout bij het starten van WhatsApp sessie",
			  content: "Zorg ervoor dat je telefoon is verbonden met internet en probeer het opnieuw, of vraag een nieuwe QR-code aan",
			},
			qrcode: {
			  title: "Wachten op QR-code scan",
			  content: "Klik op de 'QR-CODE' knop en scan de QR-code met je telefoon om de sessie te starten",
			},
			connected: {
			  title: "Verbinding tot stand gebracht!",
			},
			timeout: {
			  title: "Verbinding met telefoon verloren",
			  content: "Zorg ervoor dat je telefoon is verbonden met internet en WhatsApp is geopend, of klik op 'Verbinding verbreken' voor een nieuwe QR-code",
			},
		  },
		  table: {
			name: "Naam",
			status: "Status",
			lastUpdate: "Laatste update",
			default: "Standaard",
			actions: "Acties",
			session: "Sessie",
			number: "Nummer",
		  },
		},
		whatsappModal: {
		  title: {
			add: "WhatsApp toevoegen",
			edit: "WhatsApp bewerken",
		  },
		  tabs: {
			general: "Algemeen",
			messages: "Berichten",
			assessments: "Beoordelingen",
			integrations: "Integraties",
			schedules: "Kantooruren",
		  },
		  form: {
			name: "Naam",
			default: "Standaard",
			sendIdQueue: "Wachtrij",
			timeSendQueue: "Doorsturen naar wachtrij na X minuten",
			queueRedirection: "Wachtrij doorverwijzing",
			outOfHoursMessage: "Bericht buiten kantooruren",
			greetingMessage: "Begroetingsbericht",
			complationMessage: "Afsluitbericht",
			prompt: "Prompt",
			expiresTicket: "Open gesprekken sluiten na x minuten",
			expiresInactiveMessage: "Bericht bij sluiting wegens inactiviteit",
			queueRedirectionDesc: "Selecteer een wachtrij voor contacten zonder wachtrij",
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
			deletedAll: "Alle contacten succesvol verwijderd!",
		  },
		  searchPlaceholder: "Zoeken...",
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteAllTitle: "Alles verwijderen",
			importTitle: "Contacten importeren",
			deleteMessage: "Weet je zeker dat je dit contact wilt verwijderen? Alle gerelateerde tickets gaan verloren.",
			deleteAllMessage: "Weet je zeker dat je alle contacten wilt verwijderen? Alle gerelateerde tickets gaan verloren.",
			importMessage: "Wil je alle contacten van de telefoon importeren?",
			importTitlte: "Contacten importeren",
		  },
		  buttons: {
			import: "Contacten importeren",
			add: "Contact toevoegen",
			export: "Contacten exporteren",
			delete: "Alle contacten verwijderen",
			importSheet: "Excel importeren",
		  },
		  table: {
			name: "Naam",
			whatsapp: "WhatsApp",
			email: "E-mail",
			actions: "Acties",
		  },
		},
		queueIntegrationModal: {
		  title: {
			add: "Project toevoegen",
			edit: "Project bewerken",
		  },
		  form: {
			id: "ID",
			type: "Type",
			name: "Naam",
			projectName: "Projectnaam",
			language: "Taal",
			jsonContent: "JsonContent",
			urlN8N: "URL",
			typebotSlug: "Typebot - Slug",
			typebotExpires: "Tijd in minuten voor een gesprek verloopt",
			typebotKeywordFinish: "Woord om ticket af te sluiten",
			typebotKeywordRestart: "Woord om flow te herstarten",
			typebotRestartMessage: "Bericht bij herstart gesprek",
			typebotUnknownMessage: "Bericht bij ongeldige optie",
			typebotDelayMessage: "Vertraging (ms) tussen berichten",
		  },
		  buttons: {
			okAdd: "Toevoegen",
			okEdit: "Opslaan",
			cancel: "Annuleren",
			test: "Bot testen",
		  },
		  messages: {
			testSuccess: "Integratie succesvol getest!",
			addSuccess: "Integratie succesvol toegevoegd.",
			editSuccess: "Integratie succesvol bewerkt.",
		  },
		},
		sideMenu: {
		  name: "Initieel zijmenu",
		  note: "Indien ingeschakeld zal het zijmenu gesloten starten",
		  options: {
			enabled: "Open",
			disabled: "Gesloten",
		  },
		},
		promptModal: {
		  form: {
			name: "Naam",
			prompt: "Prompt",
			voice: "Stem",
			max_tokens: "Maximum tokens in antwoord",
			temperature: "Temperatuur",
			apikey: "API Sleutel",
			max_messages: "Maximum berichten in geschiedenis",
			voiceKey: "Stem API Sleutel",
			voiceRegion: "Stem Regio",
		  },
		  success: "Prompt succesvol opgeslagen!",
		  title: {
			add: "Prompt toevoegen",
			edit: "Prompt bewerken",
		  },
		  buttons: {
			okAdd: "Toevoegen",
			okEdit: "Opslaan",
			cancel: "Annuleren",
		  },
		},
		prompts: {
		  title: "Prompts",
		  table: {
			name: "Naam",
			queue: "Afdeling/Wachtrij",
			max_tokens: "Maximum Tokens Antwoord",
			actions: "Acties",
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Weet je het zeker? Deze actie kan niet ongedaan worden gemaakt!",
		  },
		  buttons: {
			add: "Prompt toevoegen",
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
			number: "WhatsApp nummer",
			email: "E-mail",
			extraName: "Veldnaam",
			extraValue: "Waarde",
			whatsapp: "Bron Verbinding: "
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
		  confirmationModal: {
			deleteTitle: "Verwijderen",
		  },
		  form: {
			name: "Naam",
			color: "Kleur",
			greetingMessage: "Begroetingsbericht",
			complationMessage: "Afsluitbericht",
			outOfHoursMessage: "Bericht buiten kantooruren",
			ratingMessage: "Beoordelingsbericht",
			token: "Token",
			orderQueue: "Wachtrij volgorde (Bot)",
			integrationId: "Integratie",
		  },
		  buttons: {
			okAdd: "Toevoegen",
			okEdit: "Opslaan",
			cancel: "Annuleren",
			attach: "Bestand toevoegen",
		  },
		},
		userModal: {
		  title: {
			add: "Gebruiker toevoegen",
			edit: "Gebruiker bewerken",
		  },
		  form: {
			name: "Naam",
			email: "E-mail",
			password: "Wachtwoord",
			profile: "Profiel",
			whatsapp: "Standaard Verbinding",
			allTicket: "Tickets Zonder Wachtrij [Onzichtbaar]",
			allTicketEnabled: "Ingeschakeld",
			allTicketDesabled: "Uitgeschakeld",
		  },
		  buttons: {
			okAdd: "Toevoegen",
			okEdit: "Opslaan",
			cancel: "Annuleren",
		  },
		  success: "Gebruiker succesvol opgeslagen.",
		},
		scheduleModal: {
		  title: {
			add: "Nieuwe Planning",
			edit: "Planning bewerken",
		  },
		  form: {
			body: "Bericht",
			contact: "Contact",
			sendAt: "Gepland op",
			sentAt: "Verzonden op",
		  },
		  buttons: {
			okAdd: "Toevoegen",
			okEdit: "Opslaan",
			cancel: "Annuleren",
		  },
		  success: "Planning succesvol opgeslagen.",
		},
		tagModal: {
		  title: {
			add: "Nieuwe Tag",
			edit: "Tag bewerken",
		  },
		  form: {
			name: "Naam",
			color: "Kleur",
		  },
		  buttons: {
			okAdd: "Toevoegen",
			okEdit: "Opslaan",
			cancel: "Annuleren",
		  },
		  success: "Tag succesvol opgeslagen.",
		},
		chat: {
		  noTicketMessage: "Selecteer een ticket om een gesprek te beginnen.",
		},
		uploads: {
		  titles: {
			titleUploadMsgDragDrop: "SLEEP BESTANDEN NAAR HET VELD HIERONDER",
			titleFileList: "Lijst van bestand(en)"
		  },
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
			deleted: "Het gesprek waar je in zat is verwijderd.",
		  },
		  notification: {
			message: "Bericht van",
		  },
		  tabs: {
			open: { title: "Open" },
			closed: { title: "Gesloten" },
			search: { title: "Zoeken" },
		  },
		  search: {
			placeholder: "Zoek gesprekken en berichten",
		  },
		  buttons: {
			showAll: "Alles",
		  },
		},
		transferTicketModal: {
		  title: "Ticket doorsturen",
		  fieldLabel: "Type om gebruikers te zoeken",
		  fieldQueueLabel: "Doorsturen naar wachtrij",
		  fieldQueuePlaceholder: "Selecteer een wachtrij",
		  noOptions: "Geen gebruiker gevonden met deze naam",
		  buttons: {
			ok: "Doorsturen",
			cancel: "Annuleren",
		  },
		},
		ticketsList: {
		  pendingHeader: "Wachtend",
		  assignedHeader: "In behandeling",
		  noTicketsTitle: "Niets hier!",
		  noTicketsMessage: "Geen gesprekken gevonden met deze status of zoekterm",
		  buttons: {
			accept: "Accepteren",
			closed: "Sluiten",
			reopen: "Heropenen"
		  },
		},
		newTicketModal: {
		  title: "Ticket aanmaken",
		  fieldLabel: "Type om contact te zoeken",
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
			tickets: "Gesprekken",
			quickMessages: "Snelle Antwoorden",
			contacts: "Contacten",
			queues: "Wachtrijen & Chatbot",
			tags: "Tags",
			administration: "Administratie",
			users: "Gebruikers",
			settings: "Instellingen",
			helps: "Help",
			messagesAPI: "API",
			schedules: "Planning",
			campaigns: "Campagnes",
			annoucements: "Mededelingen",
			chats: "Interne Chat",
			financeiro: "Financieel",
			files: "Bestandslijst",
			prompts: "Open.AI",
			queueIntegration: "Integraties",
		  },
		  appBar: {
			notRegister: "Geen meldingen",
			user: {
			  profile: "Profiel",
			  logout: "Uitloggen",
			},
		  },
		},
		queueIntegration: {
		  title: "Integraties",
		  table: {
			id: "ID",
			type: "Type",
			name: "Naam",
			projectName: "Projectnaam",
			language: "Taal",
			lastUpdate: "Laatste update",
			actions: "Acties",
		  },
		  buttons: {
			add: "Project toevoegen",
		  },
		  searchPlaceholder: "Zoeken...",
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Weet je het zeker? Deze actie kan niet ongedaan worden gemaakt en zal worden verwijderd uit gekoppelde wachtrijen en verbindingen",
		  },
		},
		files: {
		  title: "Bestandslijst",
		  table: {
			name: "Naam",
			contacts: "Contacten",
			actions: "Actie",
		  },
		  toasts: {
			deleted: "Lijst succesvol verwijderd!",
			deletedAll: "Alle lijsten succesvol verwijderd!",
		  },
		  buttons: {
			add: "Toevoegen",
			deleteAll: "Alles verwijderen",
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteAllTitle: "Alles verwijderen",
			deleteMessage: "Weet je zeker dat je deze lijst wilt verwijderen?",
			deleteAllMessage: "Weet je zeker dat je alle lijsten wilt verwijderen?",
		  },
		},
		messagesAPI: {
		  title: "API",
		  textMessage: {
			number: "Nummer",
			body: "Bericht",
			token: "Geregistreerde token",
		  },
		  mediaMessage: {
			number: "Nummer",
			body: "Bestandsnaam",
			media: "Bestand",
			token: "Geregistreerde token",
		  },
		},
		notifications: {
		  noTickets: "Geen meldingen.",
		},
		quickMessages: {
		  title: "Snelle Antwoorden",
		  searchPlaceholder: "Zoeken...",
		  noAttachment: "Geen bijlage",
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt! Wil je doorgaan?",
		  },
		  buttons: {
			add: "Toevoegen",
			attach: "Bestand toevoegen",
			cancel: "Annuleren",
			edit: "Bewerken",
		  },
		  toasts: {
			success: "Snelkoppeling succesvol toegevoegd!",
			deleted: "Snelkoppeling succesvol verwijderd!",
		  },
		  dialog: {
			title: "Snel Antwoord",
			shortcode: "Sneltoets",
			message: "Antwoord",
			save: "Opslaan",
			cancel: "Annuleren",
			geral: "Algemeen",
			add: "Toevoegen",
			edit: "Bewerken",
			visao: "Weergave toestaan",
		  },
		  table: {
			shortcode: "Sneltoets",
			message: "Bericht",
			actions: "Acties",
			mediaName: "Bestandsnaam",
			status: "Algemeen",
		  },
		},
		messageVariablesPicker: {
		  label: "Beschikbare variabelen",
		  vars: {
			contactFirstName: "Voornaam",
			contactName: "Naam",
			greeting: "Begroeting",
			protocolNumber: "Protocol",
			date: "Datum",
			hour: "Tijd",
		  },
		},
		contactLists: {
		  title: "Contactlijsten",
		  table: {
			name: "Naam",
			contacts: "Contacten",
			actions: "Acties",
		  },
		  buttons: {
			add: "Nieuwe Lijst",
		  },
		  dialog: {
			name: "Naam",
			company: "Bedrijf",
			okEdit: "Bewerken",
			okAdd: "Toevoegen",
			add: "Toevoegen",
			edit: "Bewerken",
			cancel: "Annuleren",
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
		  },
		  toasts: {
			deleted: "Item verwijderd",
		  },
		},
		contactListItems: {
		  title: "Contacten",
		  searchPlaceholder: "Zoeken",
		  buttons: {
			add: "Nieuw",
			lists: "Lijsten",
			import: "Importeren",
		  },
		  dialog: {
			name: "Naam",
			number: "Nummer",
			whatsapp: "WhatsApp",
			email: "E-mail",
			okEdit: "Bewerken",
			okAdd: "Toevoegen",
			add: "Toevoegen",
			edit: "Bewerken",
			cancel: "Annuleren",
		  },
		  table: {
			name: "Naam",
			number: "Nummer",
			whatsapp: "WhatsApp",
			email: "E-mail",
			actions: "Acties",
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
			importMessage: "Wil je de contacten uit dit werkblad importeren?",
			importTitlte: "Importeren",
		  },
		  toasts: {
			deleted: "Item verwijderd",
		  },
		},
		campaigns: {
		  title: "Campagnes",
		  searchPlaceholder: "Zoeken",
		  buttons: {
			add: "Nieuwe Campagne",
			contactLists: "Contactlijsten",
		  },
		  table: {
			name: "Naam",
			whatsapp: "Verbinding",
			contactList: "Contactlijst",
			status: "Status",
			scheduledAt: "Gepland",
			completedAt: "Voltooid",
			confirmation: "Bevestiging",
			actions: "Acties",
		  },
		  dialog: {
			new: "Nieuwe Campagne",
			update: "Campagne bewerken",
			readonly: "Alleen lezen",
			form: {
			  name: "Naam",
			  message1: "Bericht 1",
			  message2: "Bericht 2",
			  message3: "Bericht 3",
			  message4: "Bericht 4",
			  message5: "Bericht 5",
			  confirmationMessage1: "Bevestigingsbericht 1",
			  confirmationMessage2: "Bevestigingsbericht 2",
			  confirmationMessage3: "Bevestigingsbericht 3",
			  confirmationMessage4: "Bevestigingsbericht 4",
			  confirmationMessage5: "Bevestigingsbericht 5",
			  messagePlaceholder: "Berichtinhoud",
			  whatsapp: "Verbinding",
			  status: "Status",
			  scheduledAt: "Planning",
			  confirmation: "Bevestiging",
			  contactList: "Contactlijst",
			  tagList: "Tagslijst",
			  fileList: "Bestandslijst"
			},
			buttons: {
			  add: "Toevoegen",
			  edit: "Bijwerken",
			  okadd: "OK",
			  cancel: "Verzending annuleren",
			  restart: "Verzending herstarten",
			  close: "Sluiten",
			  attach: "Bestand toevoegen",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
		  },
		  toasts: {
			success: "Bewerking succesvol uitgevoerd",
			cancel: "Campagne geannuleerd",
			restart: "Campagne herstart",
			deleted: "Item verwijderd",
		  },
		},
		announcements: {
		  title: "Mededelingen",
		  searchPlaceholder: "Zoeken",
		  buttons: {
			add: "Nieuwe Mededeling",
			contactLists: "Mededelingenlijsten",
		  },
		  table: {
			priority: "Prioriteit",
			title: "Titel",
			text: "Tekst",
			mediaName: "Bestand",
			status: "Status",
			actions: "Acties",
		  },
		  dialog: {
			edit: "Mededeling bewerken",
			add: "Nieuwe Mededeling",
			update: "Mededeling bewerken",
			readonly: "Alleen lezen",
			form: {
			  priority: "Prioriteit",
			  title: "Titel",
			  text: "Tekst",
			  mediaPath: "Bestand",
			  status: "Status",
			},
			buttons: {
			  add: "Toevoegen",
			  edit: "Bijwerken",
			  okadd: "OK",
			  cancel: "Annuleren",
			  close: "Sluiten",
			  attach: "Bestand toevoegen",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
		  },
		  toasts: {
			success: "Bewerking succesvol uitgevoerd",
			deleted: "Item verwijderd",
		  },
		  active: "Actief",
		  inactive: "Inactief",
		},
		campaignsConfig: {
		  title: "Campagne-instellingen",
		},
		queues: {
		  title: "Wachtrijen & Chatbot",
		  table: {
			id: "ID",
			name: "Naam",
			color: "Kleur",
			greeting: "Begroetingsbericht",
			actions: "Acties",
			orderQueue: "Wachtrij volgorde (bot)",
		  },
		  buttons: {
			add: "Wachtrij toevoegen",
		  },
		  confirmationModal: {
			deleteTitle: "Verwijderen",
			deleteMessage: "Weet je het zeker? Deze actie kan niet ongedaan worden gemaakt! Tickets in deze wachtrij blijven bestaan maar worden niet meer aan een wachtrij gekoppeld.",
		  },
		},
		queueSelect: {
		  inputLabel: "Wachtrijen",
		},
		users: {
		  title: "Gebruikers",
		  table: {
			id: "ID",
			name: "Naam",
			email: "E-mail",
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
			deleteMessage: "Alle gebruikersgegevens gaan verloren. Open tickets van deze gebruiker worden verplaatst naar de wachtrij.",
		  },
		},
		helps: {
		  title: "Help Centrum",
		},
		schedules: {
		  title: "Planning",
		  confirmationModal: {
			deleteTitle: "Weet je zeker dat je deze planning wilt verwijderen?",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
		  },
		  table: {
			contact: "Contact",
			body: "Bericht",
			sendAt: "Gepland op",
			sentAt: "Verzonden op",
			status: "Status",
			actions: "Acties",
		  },
		  buttons: {
			add: "Nieuwe Planning",
		  },
		  toasts: {
			deleted: "Planning succesvol verwijderd.",
		  },
		},
		tags: {
		  title: "Tags",
		  confirmationModal: {
			deleteTitle: "Weet je zeker dat je deze tag wilt verwijderen?",
			deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
			deleteAllTitle: "Alles verwijderen",
			deleteAllMessage: "Weet je zeker dat je alle tags wilt verwijderen?",
		  },
		  table: {
			name: "Naam",
			color: "Kleur",
			tickets: "Getagde Records",
			actions: "Acties",
		  },
		  buttons: {
			add: "Nieuwe Tag",
			deleteAll: "Alles verwijderen",
		  },
		  toasts: {
			deleted: "Tag succesvol verwijderd.",
			deletedAll: "Alle tags succesvol verwijderd!",
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
			  resolve: "Afsluiten",
			  reopen: "Heropenen",
			  accept: "Accepteren",
			},
		  },
		},
		messagesInput: {
		  placeholderOpen: "Typ een bericht",
		  placeholderClosed: "Heropen of accepteer dit ticket om een bericht te sturen.",
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
		  schedule: "Planning",
		  delete: "Verwijderen",
		  transfer: "Overdragen",
		  registerAppointment: "Contactnotities",
		  appointmentsModal: {
			title: "Contactnotities",
			textarea: "Notitie",
			placeholder: "Voer hier de informatie in die je wilt registreren",
		  },
		  confirmationModal: {
			title: "Ticket verwijderen",
			titleFrom: "van contact ",
			message: "Let op! Alle berichten gerelateerd aan dit ticket gaan verloren.",
		  },
		  buttons: {
			delete: "Verwijderen",
			cancel: "Annuleren",
		  },
		},
		confirmationModal: {
		  buttons: {
			confirm: "OK",
			cancel: "Annuleren",
		  },
		},
		messageOptionsMenu: {
		  delete: "Verwijderen",
		  reply: "Beantwoorden",
		  edit: "Bericht bewerken",
		  confirmationModal: {
			title: "Bericht verwijderen?",
			message: "Deze actie kan niet ongedaan worden gemaakt.",
		  },
		},
		fileModal: {
		  title: {
			add: "Bestandslijst toevoegen",
			edit: "Bestandslijst bewerken",
		  },
		  buttons: {
			okAdd: "Opslaan",
			okEdit: "Bewerken",
			cancel: "Annuleren",
			fileOptions: "Bestand toevoegen",
		  },
		  form: {
			name: "Naam van de bestandslijst",
			message: "Lijstdetails",
			fileOptions: "Bestandslijst",
			extraName: "Bericht om met bestand te verzenden",
			extraValue: "Optiewaarde",
		  },
		  success: "Bestandslijst succesvol opgeslagen!",
		},
		backendErrors: {
		  ERR_NO_OTHER_WHATSAPP: "Er moet ten minste één standaard WhatsApp zijn.",
		  ERR_NO_DEF_WAPP_FOUND: "Geen standaard WhatsApp gevonden. Controleer de verbindingenpagina.",
		  ERR_WAPP_NOT_INITIALIZED: "Deze WhatsApp sessie is niet geïnitialiseerd. Controleer de verbindingenpagina.",
		  ERR_WAPP_CHECK_CONTACT: "Kon WhatsApp contact niet verifiëren. Controleer de verbindingenpagina.",
		  ERR_WAPP_INVALID_CONTACT: "Dit is geen geldig WhatsApp nummer.",
		  ERR_WAPP_DOWNLOAD_MEDIA: "Kon media niet downloaden van WhatsApp. Controleer de verbindingenpagina.",
		  ERR_INVALID_CREDENTIALS: "Authenticatiefout. Probeer het opnieuw.",
		  ERR_SENDING_WAPP_MSG: "Fout bij verzenden WhatsApp bericht. Controleer de verbindingenpagina.",
		  ERR_DELETE_WAPP_MSG: "Kon WhatsApp bericht niet verwijderen.",
		  ERR_OTHER_OPEN_TICKET: "Er is al een open ticket voor dit contact.",
		  ERR_SESSION_EXPIRED: "Sessie verlopen. Log opnieuw in.",
		  ERR_USER_CREATION_DISABLED: "Gebruikersregistratie is uitgeschakeld door de beheerder.",
		  ERR_NO_PERMISSION: "Je hebt geen toegang tot deze functie.",
		  ERR_DUPLICATED_CONTACT: "Er bestaat al een contact met dit nummer.",
		  ERR_NO_SETTING_FOUND: "Geen instellingen gevonden met dit ID.",
		  ERR_NO_CONTACT_FOUND: "Geen contact gevonden met dit ID.",
		  ERR_NO_TICKET_FOUND: "Geen ticket gevonden met dit ID.",
		  ERR_NO_USER_FOUND: "Geen gebruiker gevonden met dit ID.",
		  ERR_NO_WAPP_FOUND: "Geen WhatsApp gevonden met dit ID.",
		  ERR_CREATING_MESSAGE: "Fout bij het maken van bericht in database.",
		  ERR_CREATING_TICKET: "Fout bij het maken van ticket in database.",
		  ERR_FETCH_WAPP_MSG: "Fout bij ophalen bericht van WhatsApp, mogelijk is het te oud.",
		  ERR_QUEUE_COLOR_ALREADY_EXISTS: "Deze kleur is al in gebruik, kies een andere.",
		  ERR_WAPP_GREETING_REQUIRED: "Begroetingsbericht is verplicht wanneer er meer dan één wachtrij is.",
		},
	  },
	},
  };
  
  export { messages };