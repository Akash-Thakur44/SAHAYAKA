// Enhanced Application Data
const appData = {
  sampleTickets: [
    {
      id: "TKT-001",
      title: "Cannot access company email",
      description: "Unable to login to Outlook, getting authentication error",
      category: "Email Issues",
      priority: "High",
      status: "Open",
      assignedTo: "John Smith",
      createdBy: "Sarah Johnson",
      createdAt: "2025-01-04T09:15:00Z",
      department: "Email Support",
      channel: "Web Portal",
      slaStatus: "On Track"
    },
    {
      id: "TKT-002", 
      title: "Software installation request - Adobe Creative Suite",
      description: "Need Adobe Creative Suite installed for design work",
      category: "Software",
      priority: "Medium",
      status: "In Progress",
      assignedTo: "Mike Davis",
      createdBy: "Alex Chen",
      createdAt: "2025-01-04T10:30:00Z",
      department: "Software Support",
      channel: "Email",
      slaStatus: "On Track"
    },
    {
      id: "TKT-003",
      title: "Network connectivity issues in Conference Room B",
      description: "WiFi keeps disconnecting during meetings, affecting video calls",
      category: "Network",
      priority: "Critical",
      status: "Resolved",
      assignedTo: "Lisa Wong",
      createdBy: "David Brown",
      createdAt: "2025-01-03T14:45:00Z",
      department: "Network Support",
      channel: "Chat",
      slaStatus: "Resolved"
    },
    {
      id: "TKT-004",
      title: "Laptop running very slowly",
      description: "Computer takes 10+ minutes to boot and programs are freezing",
      category: "Hardware",
      priority: "Medium",
      status: "New",
      assignedTo: null,
      createdBy: "Emma Wilson",
      createdAt: "2025-01-04T11:20:00Z",
      department: "Hardware Support",
      channel: "Web Portal",
      slaStatus: "On Track"
    },
    {
      id: "TKT-005",
      title: "Need VPN access for remote work",
      description: "Starting remote work next week, require VPN setup and credentials",
      category: "Access Management", 
      priority: "Medium",
      status: "Open",
      assignedTo: "Tom Garcia",
      createdBy: "Rachel Green",
      createdAt: "2025-01-04T08:00:00Z",
      department: "Security Team",
      channel: "Email",
      slaStatus: "On Track"
    }
  ],
  users: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Employee",
      department: "Marketing",
      email: "sarah.johnson@company.com"
    },
    {
      id: 2,
      name: "John Smith", 
      role: "IT Support Agent",
      department: "IT Support",
      email: "john.smith@company.com",
      specialization: "Email & Communication"
    },
    {
      id: 3,
      name: "Mike Davis",
      role: "IT Support Agent", 
      department: "IT Support",
      email: "mike.davis@company.com",
      specialization: "Software & Applications"
    },
    {
      id: 4,
      name: "Admin User",
      role: "IT Admin",
      department: "IT Management",
      email: "admin@company.com"
    }
  ],
  knowledgeBase: [
    {
      id: 1,
      title: "How to Reset Your Email Password",
      category: "Email Issues",
      content: "To reset your email password: 1) Go to the login page and click 'Forgot Password' 2) Enter your company email address 3) Check your alternate email for reset instructions 4) Follow the link and create a new secure password 5) Contact IT if you don't receive the reset email within 10 minutes",
      tags: ["email", "password", "reset", "outlook"]
    },
    {
      id: 2,
      title: "Connecting to Company WiFi",
      category: "Network",
      content: "To connect to company WiFi: 1) Select 'SAHAYAKA-WiFi' from available networks 2) Enter password: Welcome2025! 3) Accept security certificates when prompted 4) Verify connection by opening a web browser 5) Contact Network Support if connection fails after 3 attempts",
      tags: ["wifi", "network", "connection", "wireless"]
    },
    {
      id: 3,
      title: "Software Installation Guidelines",
      category: "Software", 
      content: "For software installations: 1) Check our approved software list first 2) Submit installation request with business justification 3) Wait for security review and IT approval 4) Installation will be scheduled within 2-3 business days 5) You'll receive notification when installation is complete",
      tags: ["software", "installation", "approval", "security"]
    },
    {
      id: 4,
      title: "VPN Setup for Remote Work",
      category: "Access Management",
      content: "Setting up VPN access: 1) Request VPN access through IT portal 2) Download the approved VPN client (Cisco AnyConnect) 3) Use your domain credentials to connect 4) Always connect to VPN before accessing company resources 5) Contact Security Team for access issues",
      tags: ["vpn", "remote", "access", "security"]
    },
    {
      id: 5,
      title: "Troubleshooting Printer Issues",
      category: "Hardware",
      content: "Common printer problems and solutions: 1) Check power and network connections 2) Clear any paper jams carefully 3) Update or reinstall printer drivers 4) Check ink/toner levels 5) Restart the print spooler service 6) Submit ticket if issue persists",
      tags: ["printer", "hardware", "troubleshooting", "drivers"]
    }
  ],
  analytics: {
    totalTickets: 156,
    openTickets: 23,
    inProgressTickets: 18,
    resolvedTickets: 89,
    closedTickets: 26,
    averageResolutionTime: "4.2 hours",
    slaCompliance: "94%",
    topCategories: [
      {"name": "Software", "count": 45},
      {"name": "Network", "count": 38},
      {"name": "Hardware", "count": 32},
      {"name": "Email Issues", "count": 25},
      {"name": "Access Management", "count": 16}
    ]
  },
  chatResponses: {
    greeting: "👋 Hello! I'm SAHAYAKA, your intelligent IT assistant. I'm here to help you resolve technical issues quickly and efficiently. What can I help you with today?",
    email: "📧 I can help you with email issues! Common solutions include: checking your internet connection, verifying your password, clearing browser cache, or checking server status. Would you like me to guide you through these steps or create a support ticket for advanced troubleshooting?",
    network: "🌐 For network connectivity issues, let's try these steps: 1) Restart your router/modem 2) Forget and reconnect to WiFi 3) Run Windows network troubleshooter 4) Check for network adapter updates. If these don't resolve the issue, I can escalate to our network specialists.",
    password: "🔒 For password-related issues, I recommend: 1) Using our self-service password reset portal 2) Checking if Caps Lock is enabled 3) Clearing saved passwords in your browser 4) Ensuring you're using the correct domain format. Need me to guide you through the reset process?",
    software: "💻 For software-related problems, try these solutions: 1) Restart the application 2) Run as administrator 3) Check for software updates 4) Verify system requirements. For new software installations, I can help you submit an approval request through the proper channels.",
    hardware: "🔧 Hardware issues can be tricky! Let's start with: 1) Checking all physical connections 2) Restarting the device 3) Running built-in diagnostics 4) Checking for driver updates. If the problem persists, I'll create a hardware support ticket with priority routing.",
    vpn: "🔐 VPN connection troubles? Here's what to try: 1) Check your internet connection first 2) Restart the VPN client 3) Try different server locations 4) Update the VPN client software 5) Clear VPN cache. Contact our Security Team if you need new VPN credentials.",
    default: "🤔 I understand you need assistance. Could you provide more details about your specific issue? I can help with email problems, network connectivity, software installations, hardware troubleshooting, password resets, VPN access, and much more. Just describe what's happening and I'll guide you to a solution!"
  }
};

// Application State
let currentUser = null;
let currentTickets = [...appData.sampleTickets];
let ticketCounter = 6;
let analyticsChart = null;
let typingTimeout = null;

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const mainApp = document.getElementById('main-app');
const userRoleSelect = document.getElementById('user-role');
const loginBtn = document.getElementById('login-btn');
const userRoleBadge = document.getElementById('user-role-badge');
const logoutBtn = document.getElementById('logout-btn');

// Navigation
const navLinks = {
  dashboard: document.getElementById('nav-dashboard'),
  tickets: document.getElementById('nav-tickets'),
  knowledge: document.getElementById('nav-knowledge'),
  analytics: document.getElementById('nav-analytics'),
  chat: document.getElementById('nav-chat')
};

// Content Sections
const sections = {
  dashboard: document.getElementById('dashboard'),
  tickets: document.getElementById('tickets'),
  knowledge: document.getElementById('knowledge'),
  analytics: document.getElementById('analytics'),
  chat: document.getElementById('chat')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  addLoadingAnimation();
});

function initializeApp() {
  // Login functionality
  loginBtn.addEventListener('click', handleLogin);
  logoutBtn.addEventListener('click', handleLogout);
  
  // Navigation with enhanced animations
  Object.keys(navLinks).forEach(key => {
    if (navLinks[key]) {
      navLinks[key].addEventListener('click', () => showSection(key));
    }
  });
  
  // Ticket creation
  const createTicketBtn = document.getElementById('create-ticket-btn');
  if (createTicketBtn) {
    createTicketBtn.addEventListener('click', showCreateTicketModal);
  }
  
  const createTicketForm = document.getElementById('create-ticket-form');
  if (createTicketForm) {
    createTicketForm.addEventListener('submit', handleCreateTicket);
  }
  
  // Modal close handlers
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });
  
  // Search and filters with debouncing
  const ticketSearch = document.getElementById('ticket-search');
  const ticketFilter = document.getElementById('ticket-filter');
  const kbSearch = document.getElementById('kb-search');
  
  if (ticketSearch) {
    ticketSearch.addEventListener('input', debounce(filterTickets, 300));
  }
  if (ticketFilter) {
    ticketFilter.addEventListener('change', filterTickets);
  }
  if (kbSearch) {
    kbSearch.addEventListener('input', debounce(filterKnowledgeBase, 300));
  }
  
  // Enhanced chat functionality
  const sendChatBtn = document.getElementById('send-chat');
  const chatInput = document.getElementById('chat-input-field');
  
  if (sendChatBtn) sendChatBtn.addEventListener('click', sendChatMessage);
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
      }
    });
  }
  
  // AI suggestions for ticket creation
  const ticketDescription = document.getElementById('ticket-description');
  if (ticketDescription) {
    ticketDescription.addEventListener('input', debounce(generateAISuggestions, 500));
  }
  
  // Click outside modal to close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModals();
      }
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
  
  // Initialize with login screen
  showLoginScreen();
}

// Enhanced Animation Functions
function addLoadingAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in { 
      animation: fadeIn 0.5s ease-out forwards; 
    }
    .slide-up { 
      animation: slideUp 0.4s ease-out forwards; 
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { 
        opacity: 0; 
        transform: translateY(20px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
  `;
  document.head.appendChild(style);
}

function animateMetrics() {
  const metrics = document.querySelectorAll('.metric-value');
  metrics.forEach((metric, index) => {
    setTimeout(() => {
      metric.style.transform = 'scale(1.1)';
      setTimeout(() => {
        metric.style.transform = 'scale(1)';
      }, 200);
    }, index * 100);
  });
}

// Enhanced Login/Logout Functions
function handleLogin() {
  const selectedRole = userRoleSelect.value;
  if (!selectedRole) {
    showNotification('Please select a role to continue', 'error');
    return;
  }
  
  // Add loading state
  loginBtn.textContent = 'Signing In...';
  loginBtn.disabled = true;
  
  setTimeout(() => {
    currentUser = {
      role: selectedRole,
      name: selectedRole === 'employee' ? 'Sarah Johnson' : 
            selectedRole === 'agent' ? 'John Smith' : 'Admin User',
      avatar: selectedRole === 'employee' ? '👤' : 
              selectedRole === 'agent' ? '🛠️' : '👑'
    };
    
    showMainApp();
    showNotification(`🎉 Welcome back, ${currentUser.name}! Ready to tackle today's challenges?`, 'success');
    
    // Reset button
    loginBtn.textContent = 'Sign In';
    loginBtn.disabled = false;
  }, 1000);
}

function handleLogout() {
  // Clear current user first
  currentUser = null;
  
  // Reset UI state
  userRoleSelect.value = '';
  
  // Close any open modals
  closeModals();
  
  // Clear notifications
  const notificationsContainer = document.getElementById('notifications');
  if (notificationsContainer) {
    notificationsContainer.innerHTML = '';
  }
  
  // Clear chat messages except the initial welcome
  const chatMessages = document.getElementById('chat-messages');
  if (chatMessages) {
    chatMessages.innerHTML = `
      <div class="chat-message bot-message">
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="message-text">
            Hello! I'm SAHAYAKA AI Assistant. How can I help you with your IT issues today?
          </div>
          <div class="message-time">Now</div>
        </div>
      </div>
    `;
  }
  
  // Destroy chart if exists
  if (analyticsChart) {
    analyticsChart.destroy();
    analyticsChart = null;
  }
  
  // Reset app state
  mainApp.removeAttribute('data-role');
  
  // Show login screen
  showLoginScreen();
  
  showNotification('👋 Successfully logged out. See you next time!', 'info');
}

function showLoginScreen() {
  if (loginScreen) {
    loginScreen.classList.remove('hidden');
    loginScreen.classList.add('fade-in');
  }
  if (mainApp) {
    mainApp.classList.add('hidden');
  }
}

function showMainApp() {
  if (loginScreen) {
    loginScreen.classList.add('hidden');
  }
  if (mainApp) {
    mainApp.classList.remove('hidden');
    mainApp.classList.add('fade-in');
    mainApp.setAttribute('data-role', currentUser.role);
  }
  
  if (userRoleBadge) {
    userRoleBadge.textContent = `${currentUser.avatar} ${currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}`;
  }
  
  // Update role-based visibility
  updateRoleBasedVisibility();
  
  showSection('dashboard');
  updateDashboard();
}

function updateRoleBasedVisibility() {
  // Show/hide elements based on role
  const employeeElements = document.querySelectorAll('.employee-only');
  const agentElements = document.querySelectorAll('.agent-only');
  const adminElements = document.querySelectorAll('.admin-only');
  
  // Reset all visibility
  employeeElements.forEach(el => el.style.display = 'none');
  agentElements.forEach(el => el.style.display = 'none');
  adminElements.forEach(el => el.style.display = 'none');
  
  // Show relevant elements based on current role
  if (currentUser) {
    switch(currentUser.role) {
      case 'employee':
        employeeElements.forEach(el => el.style.display = 'block');
        break;
      case 'agent':
        agentElements.forEach(el => el.style.display = 'block');
        employeeElements.forEach(el => el.style.display = 'none');
        adminElements.forEach(el => el.style.display = 'none');
        break;
      case 'admin':
        adminElements.forEach(el => el.style.display = 'block');
        agentElements.forEach(el => el.style.display = 'block');
        employeeElements.forEach(el => el.style.display = 'none');
        break;
    }
  }
}

// Enhanced Navigation
function showSection(sectionName) {
  // Hide all sections
  Object.values(sections).forEach(section => {
    if (section) section.classList.add('hidden');
  });
  
  // Remove active state from all nav links
  Object.values(navLinks).forEach(link => {
    if (link) link.classList.remove('active');
  });
  
  // Show selected section with animation
  if (sections[sectionName]) {
    sections[sectionName].classList.remove('hidden');
    sections[sectionName].classList.add('fade-in');
  }
  if (navLinks[sectionName]) {
    navLinks[sectionName].classList.add('active');
  }
  
  // Load section-specific content
  switch(sectionName) {
    case 'dashboard':
      updateDashboard();
      break;
    case 'tickets':
      displayTickets();
      break;
    case 'knowledge':
      displayKnowledgeBase();
      break;
    case 'analytics':
      displayAnalytics();
      break;
    case 'chat':
      initializeChat();
      break;
  }
}

// Enhanced Dashboard Functions
function updateDashboard() {
  // Update metrics with animation
  setTimeout(() => {
    const totalTicketsEl = document.getElementById('total-tickets');
    const openTicketsEl = document.getElementById('open-tickets');
    const inProgressTicketsEl = document.getElementById('in-progress-tickets');
    const resolvedTicketsEl = document.getElementById('resolved-tickets');
    
    if (totalTicketsEl) animateCounter(totalTicketsEl, currentTickets.length);
    if (openTicketsEl) animateCounter(openTicketsEl, currentTickets.filter(t => t.status === 'Open').length);
    if (inProgressTicketsEl) animateCounter(inProgressTicketsEl, currentTickets.filter(t => t.status === 'In Progress').length);
    if (resolvedTicketsEl) animateCounter(resolvedTicketsEl, currentTickets.filter(t => t.status === 'Resolved').length);
    
    setTimeout(animateMetrics, 500);
  }, 100);
  
  // Display recent tickets
  const recentTickets = currentTickets.slice(-3).reverse();
  const recentTicketsList = document.getElementById('recent-tickets-list');
  if (recentTicketsList) {
    recentTicketsList.innerHTML = '';
    
    recentTickets.forEach((ticket, index) => {
      setTimeout(() => {
        const ticketElement = createTicketElement(ticket);
        ticketElement.classList.add('slide-up');
        recentTicketsList.appendChild(ticketElement);
      }, index * 150);
    });
  }
}

function animateCounter(element, targetValue, duration = 1000) {
  const startValue = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutCubic(progress));
    element.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Enhanced Ticket Management
function displayTickets() {
  const ticketsList = document.getElementById('tickets-list');
  if (!ticketsList) return;
  
  ticketsList.innerHTML = '';
  
  const filteredTickets = getFilteredTickets();
  
  if (filteredTickets.length === 0) {
    ticketsList.innerHTML = `
      <div style="text-align: center; padding: var(--space-32); color: var(--color-text-secondary);">
        <div style="font-size: 3rem; margin-bottom: var(--space-16);">🎫</div>
        <h3>No tickets found</h3>
        <p>Try adjusting your search criteria or create a new ticket.</p>
      </div>
    `;
    return;
  }
  
  filteredTickets.forEach((ticket, index) => {
    setTimeout(() => {
      const ticketElement = createTicketElement(ticket);
      ticketElement.classList.add('slide-up');
      ticketsList.appendChild(ticketElement);
    }, index * 100);
  });
}

function createTicketElement(ticket) {
  const ticketDiv = document.createElement('div');
  ticketDiv.className = 'ticket-card';
  ticketDiv.onclick = () => showTicketDetail(ticket);
  
  const priorityClass = `priority-${ticket.priority.toLowerCase()}`;
  const statusIcon = getStatusIcon(ticket.status);
  const categoryIcon = getCategoryIcon(ticket.category);
  
  ticketDiv.innerHTML = `
    <div class="ticket-header">
      <div>
        <div class="ticket-id">${ticket.id}</div>
        <h4 class="ticket-title">${categoryIcon} ${ticket.title}</h4>
      </div>
      <div class="ticket-priority ${priorityClass}">
        ${getPriorityIcon(ticket.priority)} ${ticket.priority}
      </div>
    </div>
    <p style="color: var(--color-text-secondary); margin: var(--space-8) 0; line-height: 1.5;">
      ${ticket.description.length > 120 ? ticket.description.substring(0, 120) + '...' : ticket.description}
    </p>
    <div class="ticket-meta">
      <span class="ticket-meta-item">
        <strong>${statusIcon} Status:</strong> ${ticket.status}
      </span>
      <span class="ticket-meta-item">
        <strong>📁 Category:</strong> ${ticket.category}
      </span>
      <span class="ticket-meta-item">
        <strong>📅 Created:</strong> ${formatDate(ticket.createdAt)}
      </span>
      <span class="ticket-meta-item">
        <strong>📞 Channel:</strong> ${ticket.channel}
      </span>
    </div>
  `;
  
  return ticketDiv;
}

function getStatusIcon(status) {
  const icons = {
    'New': '🆕',
    'Open': '🔓',
    'In Progress': '⚙️',
    'Resolved': '✅',
    'Closed': '🔒'
  };
  return icons[status] || '📝';
}

function getCategoryIcon(category) {
  const icons = {
    'Email Issues': '📧',
    'Network': '🌐',
    'Software': '💻',
    'Hardware': '🔧',
    'Access Management': '🔐',
    'Security': '🛡️'
  };
  return icons[category] || '📋';
}

function getPriorityIcon(priority) {
  const icons = {
    'Low': '🟢',
    'Medium': '🟡',
    'High': '🟠',
    'Critical': '🔴'
  };
  return icons[priority] || '⚪';
}

// Enhanced Ticket Creation
function showCreateTicketModal() {
  const modal = document.getElementById('create-ticket-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('fade-in');
    
    // Focus on title field
    setTimeout(() => {
      const titleField = document.getElementById('ticket-title');
      if (titleField) titleField.focus();
    }, 100);
  }
}

function handleCreateTicket(e) {
  e.preventDefault();
  
  const titleEl = document.getElementById('ticket-title');
  const descriptionEl = document.getElementById('ticket-description');
  const categoryEl = document.getElementById('ticket-category');
  const priorityEl = document.getElementById('ticket-priority');
  
  if (!titleEl || !descriptionEl) return;
  
  const title = titleEl.value.trim();
  const description = descriptionEl.value.trim();
  
  if (!title || !description) {
    showNotification('⚠️ Please fill in all required fields', 'error');
    return;
  }
  
  let category = categoryEl ? categoryEl.value : '';
  let priority = priorityEl ? priorityEl.value : '';
  
  // AI-powered auto-classification
  if (!category) {
    category = classifyTicket(description);
  }
  
  if (!priority) {
    priority = determinePriority(description);
  }
  
  const newTicket = {
    id: `TKT-${String(ticketCounter++).padStart(3, '0')}`,
    title,
    description,
    category,
    priority,
    status: 'New',
    assignedTo: null,
    createdBy: currentUser.name,
    createdAt: new Date().toISOString(),
    department: getDepartmentByCategory(category),
    channel: 'Web Portal',
    slaStatus: 'On Track'
  };
  
  currentTickets.push(newTicket);
  
  closeModals();
  
  // Reset form
  const form = document.getElementById('create-ticket-form');
  if (form) form.reset();
  
  const aiSuggestions = document.getElementById('ai-suggestions');
  if (aiSuggestions) aiSuggestions.classList.add('hidden');
  
  showNotification(`🎉 Ticket ${newTicket.id} created successfully! Our team will review it shortly.`, 'success');
  updateDashboard();
  
  if (sections.tickets && !sections.tickets.classList.contains('hidden')) {
    displayTickets();
  }
}

// Enhanced AI Functions
function generateAISuggestions() {
  const descriptionEl = document.getElementById('ticket-description');
  const suggestionsDiv = document.getElementById('ai-suggestions');
  const categoryEl = document.getElementById('ticket-category');
  const priorityEl = document.getElementById('ticket-priority');
  
  if (!descriptionEl || !suggestionsDiv) return;
  
  const description = descriptionEl.value.trim();
  
  if (description.length < 10) {
    suggestionsDiv.classList.add('hidden');
    return;
  }
  
  const category = classifyTicket(description);
  const priority = determinePriority(description);
  const confidence = calculateConfidence(description);
  
  suggestionsDiv.classList.remove('hidden');
  suggestionsDiv.innerHTML = `
    <div class="ai-suggestion-title">
      🤖 AI Analysis Complete
    </div>
    <div class="ai-suggestion-text">
      <strong>Suggested Category:</strong> ${getCategoryIcon(category)} ${category} (${confidence}% confidence)<br>
      <strong>Recommended Priority:</strong> ${getPriorityIcon(priority)} ${priority}<br>
      <strong>Auto-routing to:</strong> ${getDepartmentByCategory(category)}<br>
      <strong>Estimated Resolution:</strong> ${getEstimatedResolution(priority)}
    </div>
  `;
  
  // Auto-select suggestions
  if (categoryEl) categoryEl.value = category;
  if (priorityEl) priorityEl.value = priority;
}

function classifyTicket(description) {
  const desc = description.toLowerCase();
  const keywords = {
    'Email Issues': ['email', 'outlook', 'mail', 'smtp', 'imap', 'exchange', 'calendar'],
    'Network': ['network', 'wifi', 'internet', 'connection', 'vpn', 'router', 'dns'],
    'Software': ['software', 'application', 'program', 'install', 'update', 'crash', 'error'],
    'Hardware': ['laptop', 'computer', 'mouse', 'keyboard', 'monitor', 'printer', 'slow', 'freeze'],
    'Access Management': ['access', 'permission', 'login', 'password', 'account', 'user'],
    'Security': ['security', 'virus', 'malware', 'phishing', 'suspicious', 'breach']
  };
  
  let maxScore = 0;
  let bestCategory = 'Software';
  
  Object.entries(keywords).forEach(([category, words]) => {
    const score = words.reduce((acc, word) => {
      return acc + (desc.includes(word) ? 1 : 0);
    }, 0);
    
    if (score > maxScore) {
      maxScore = score;
      bestCategory = category;
    }
  });
  
  return bestCategory;
}

function determinePriority(description) {
  const desc = description.toLowerCase();
  
  if (desc.match(/(critical|emergency|urgent|down|stopped|can't work|production|system failure)/)) {
    return 'Critical';
  } else if (desc.match(/(important|asap|blocking|cannot|urgent|high)/)) {
    return 'High';
  } else if (desc.match(/(slow|sometimes|occasional|minor|low impact)/)) {
    return 'Low';
  }
  
  return 'Medium';
}

function calculateConfidence(description) {
  return Math.floor(Math.random() * 20) + 75; // 75-95% confidence simulation
}

function getEstimatedResolution(priority) {
  const estimates = {
    'Critical': '2-4 hours',
    'High': '4-8 hours',
    'Medium': '1-2 days',
    'Low': '3-5 days'
  };
  return estimates[priority] || '1-2 days';
}

function getDepartmentByCategory(category) {
  const departments = {
    'Email Issues': 'Email Support Team',
    'Network': 'Network Infrastructure',
    'Software': 'Software Support',
    'Hardware': 'Hardware Support',
    'Access Management': 'Security & Access',
    'Security': 'Cybersecurity Team'
  };
  
  return departments[category] || 'General IT Support';
}

// Enhanced Knowledge Base
function displayKnowledgeBase() {
  const container = document.getElementById('kb-articles');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.knowledgeBase.forEach((article, index) => {
    setTimeout(() => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'kb-article slide-up';
      
      articleDiv.innerHTML = `
        <div class="kb-article-category">${getCategoryIcon(article.category)} ${article.category}</div>
        <h4>${article.title}</h4>
        <div class="kb-article-content">${article.content}</div>
        <div style="margin-top: var(--space-12); display: flex; gap: var(--space-8); flex-wrap: wrap;">
          ${article.tags.map(tag => `<span style="background: var(--color-bg-2); color: var(--color-text-secondary); padding: var(--space-4) var(--space-8); border-radius: var(--radius-full); font-size: var(--font-size-xs);">#${tag}</span>`).join('')}
        </div>
      `;
      
      container.appendChild(articleDiv);
    }, index * 100);
  });
}

function filterKnowledgeBase() {
  const searchEl = document.getElementById('kb-search');
  if (!searchEl) return;
  
  const searchTerm = searchEl.value.toLowerCase();
  const articles = document.querySelectorAll('.kb-article');
  
  articles.forEach(article => {
    const text = article.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      article.style.display = 'block';
      article.classList.add('slide-up');
    } else {
      article.style.display = 'none';
    }
  });
}

// Enhanced Analytics
function displayAnalytics() {
  // Update SLA metrics with animation
  setTimeout(() => {
    const avgResolutionEl = document.getElementById('avg-resolution');
    const slaComplianceEl = document.getElementById('sla-compliance');
    
    if (avgResolutionEl) {
      avgResolutionEl.textContent = appData.analytics.averageResolutionTime;
      avgResolutionEl.style.transform = 'scale(1.1)';
      setTimeout(() => avgResolutionEl.style.transform = 'scale(1)', 200);
    }
    
    if (slaComplianceEl) {
      slaComplianceEl.textContent = appData.analytics.slaCompliance;
      slaComplianceEl.style.transform = 'scale(1.1)';
      setTimeout(() => slaComplianceEl.style.transform = 'scale(1)', 200);
    }
  }, 300);
  
  // Create enhanced chart
  const chartCanvas = document.getElementById('ticket-chart');
  if (!chartCanvas) return;
  
  if (analyticsChart) {
    analyticsChart.destroy();
  }
  
  const ctx = chartCanvas.getContext('2d');
  
  analyticsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: appData.analytics.topCategories.map(cat => cat.name),
      datasets: [{
        data: appData.analytics.topCategories.map(cat => cat.count),
        backgroundColor: [
          '#1FB8CD',
          '#FFC185', 
          '#B4413C',
          '#ECEBD5',
          '#5D878F'
        ],
        borderWidth: 3,
        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-surface')
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              family: 'Inter',
              size: 12
            }
          }
        },
        tooltip: {
          backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-surface'),
          titleColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text'),
          bodyColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary'),
          borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-border'),
          borderWidth: 1
        }
      },
      animation: {
        animateRotate: true,
        duration: 2000
      }
    }
  });
}

// Enhanced Chat Functions
function initializeChat() {
  const messagesContainer = document.getElementById('chat-messages');
  if (messagesContainer && messagesContainer.children.length === 1) {
    // Add welcome message if it's the first time
    setTimeout(() => {
      addChatMessage(appData.chatResponses.greeting, 'bot');
    }, 500);
  }
}

function sendChatMessage() {
  const input = document.getElementById('chat-input-field');
  if (!input) return;
  
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatMessage(message, 'user');
  input.value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  // Simulate AI response with more realistic delay
  setTimeout(() => {
    hideTypingIndicator();
    const response = generateChatResponse(message);
    addChatMessage(response, 'bot');
  }, Math.random() * 2000 + 1000);
}

function addChatMessage(content, sender) {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}-message`;
  
  const avatar = sender === 'bot' ? '🤖' : (currentUser?.avatar || '👤');
  const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">
      <div class="message-text">${content}</div>
      <div class="message-time">${time}</div>
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message bot-message typing-indicator';
  typingDiv.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-content">
      <div class="message-text" style="padding: var(--space-16);">
        <span style="display: inline-flex; gap: 4px;">
          <span style="animation: typing 1.4s infinite ease-in-out; animation-delay: 0s;">●</span>
          <span style="animation: typing 1.4s infinite ease-in-out; animation-delay: 0.2s;">●</span>
          <span style="animation: typing 1.4s infinite ease-in-out; animation-delay: 0.4s;">●</span>
        </span>
      </div>
    </div>
  `;
  
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // Add typing animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes typing {
      0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
      30% { opacity: 1; transform: scale(1); }
    }
  `;
  if (!document.querySelector('#typing-animation')) {
    style.id = 'typing-animation';
    document.head.appendChild(style);
  }
}

function hideTypingIndicator() {
  const typingIndicator = document.querySelector('.typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function generateChatResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // More sophisticated keyword matching
  if (lowerMessage.match(/(email|mail|outlook|smtp|imap)/)) {
    return appData.chatResponses.email;
  } else if (lowerMessage.match(/(network|wifi|internet|connection|router)/)) {
    return appData.chatResponses.network;
  } else if (lowerMessage.match(/(password|login|access|account)/)) {
    return appData.chatResponses.password;
  } else if (lowerMessage.match(/(software|application|program|install)/)) {
    return appData.chatResponses.software;
  } else if (lowerMessage.match(/(hardware|computer|laptop|printer|mouse)/)) {
    return appData.chatResponses.hardware;
  } else if (lowerMessage.match(/(vpn|remote|secure)/)) {
    return appData.chatResponses.vpn;
  } else if (lowerMessage.match(/(ticket|help|support|problem|issue)/)) {
    return "🎫 I'd be happy to help you create a support ticket! You can use the 'Create New Ticket' button in the dashboard, or describe your issue in more detail and I'll provide specific troubleshooting steps.";
  } else if (lowerMessage.match(/(thank|thanks|appreciate)/)) {
    return "😊 You're welcome! I'm always here to help. Is there anything else you need assistance with today?";
  } else if (lowerMessage.match(/(hello|hi|hey|good morning|good afternoon)/)) {
    return "👋 Hello there! Great to see you again. I'm ready to help you resolve any IT challenges you're facing. What's on your mind today?";
  }
  
  return appData.chatResponses.default;
}

// Enhanced Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

function showNotification(message, type = 'info') {
  const container = document.getElementById('notifications');
  if (!container) return;
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div style="flex: 1;">${message}</div>
    <button onclick="this.parentElement.remove()" style="background: none; border: none; color: var(--color-text-secondary); cursor: pointer; padding: var(--space-4);">&times;</button>
  `;
  
  container.appendChild(notification);
  
  // Auto-remove after 6 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
      setTimeout(() => notification.remove(), 300);
    }
  }, 6000);
  
  // Add slide out animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideOutRight {
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  if (!document.querySelector('#slideout-animation')) {
    style.id = 'slideout-animation';
    document.head.appendChild(style);
  }
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
}

function showTicketDetail(ticket) {
  const modal = document.getElementById('ticket-detail-modal');
  const title = document.getElementById('ticket-detail-title');
  const content = document.getElementById('ticket-detail-content');
  
  if (!modal || !title || !content) return;
  
  title.textContent = `${ticket.id} - ${ticket.title}`;
  
  content.innerHTML = `
    <div style="padding: var(--space-24);">
      <div style="margin-bottom: var(--space-24);">
        <h4 style="margin-bottom: var(--space-12); color: var(--color-text);">Description</h4>
        <p style="color: var(--color-text-secondary); line-height: 1.6; background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">${ticket.description}</p>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-20); margin-bottom: var(--space-24);">
        <div style="background: var(--color-surface); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--color-border);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Status</strong><br>
          <span class="status status--${ticket.status === 'Resolved' ? 'success' : 'info'}" style="margin-top: var(--space-4);">${getStatusIcon(ticket.status)} ${ticket.status}</span>
        </div>
        <div style="background: var(--color-surface); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--color-border);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Priority</strong><br>
          <span class="ticket-priority priority-${ticket.priority.toLowerCase()}" style="margin-top: var(--space-4);">${getPriorityIcon(ticket.priority)} ${ticket.priority}</span>
        </div>
        <div style="background: var(--color-surface); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--color-border);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Category</strong><br>
          <span style="color: var(--color-text); margin-top: var(--space-4); display: block;">${getCategoryIcon(ticket.category)} ${ticket.category}</span>
        </div>
        <div style="background: var(--color-surface); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--color-border);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Department</strong><br>
          <span style="color: var(--color-text); margin-top: var(--space-4); display: block;">🏢 ${ticket.department}</span>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-20);">
        <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Created By</strong><br>
          <span style="color: var(--color-text);">👤 ${ticket.createdBy}</span>
        </div>
        <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Assigned To</strong><br>
          <span style="color: var(--color-text);">🛠️ ${ticket.assignedTo || 'Unassigned'}</span>
        </div>
        <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Created</strong><br>
          <span style="color: var(--color-text);">📅 ${formatDate(ticket.createdAt)}</span>
        </div>
        <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base);">
          <strong style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Channel</strong><br>
          <span style="color: var(--color-text);">📞 ${ticket.channel}</span>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function handleKeyboardShortcuts(e) {
  // Ctrl/Cmd + K for global search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.querySelector('#ticket-search, #kb-search');
    if (searchInput) searchInput.focus();
  }
  
  // Escape to close modals
  if (e.key === 'Escape') {
    closeModals();
  }
  
  // Ctrl/Cmd + N for new ticket (employee only)
  if ((e.ctrlKey || e.metaKey) && e.key === 'n' && currentUser?.role === 'employee') {
    e.preventDefault();
    showCreateTicketModal();
  }
}

function getFilteredTickets() {
  const searchEl = document.getElementById('ticket-search');
  const filterEl = document.getElementById('ticket-filter');
  
  const searchTerm = searchEl ? searchEl.value.toLowerCase() : '';
  const statusFilter = filterEl ? filterEl.value : '';
  
  return currentTickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm) || 
                         ticket.description.toLowerCase().includes(searchTerm) ||
                         ticket.id.toLowerCase().includes(searchTerm) ||
                         ticket.category.toLowerCase().includes(searchTerm);
    const matchesStatus = !statusFilter || ticket.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
}

function filterTickets() {
  displayTickets();
}