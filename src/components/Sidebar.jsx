import React, { useState, useEffect } from 'react';
import { subjects, units } from '../data/topics';
import { Icon } from './Icons';
import { getCompletedTopics } from '../utils/progress';

// ============================================================
// Shadcn-style Sidebar — composable, collapsible to icons
// ============================================================

// ---------- SidebarProvider (context for collapse state) ----------
const SidebarContext = React.createContext({
  collapsed: false,
  toggleCollapsed: () => {},
});

function useSidebar() {
  return React.useContext(SidebarContext);
}

// ---------- SidebarTrigger (toggle button) ----------
function SidebarTrigger() {
  const { toggleCollapsed } = useSidebar();
  return (
    <button
      className="sidebar-trigger"
      onClick={toggleCollapsed}
      aria-label="Toggle sidebar"
    >
      <Icon name="menu" size={18} color="currentColor" />
    </button>
  );
}

// ---------- SidebarHeader (sticky top) ----------
function SidebarHeader() {
  const { collapsed } = useSidebar();
  return (
    <div className="sidebar-header">
      <div className="sidebar-brand">
        <span className="sidebar-brand-icon">
          <Icon name="chart" size={22} color="#c4ff00" />
        </span>
        {!collapsed && (
          <span className="sidebar-brand-text">MCA Study</span>
        )}
      </div>
      <SidebarTrigger />
    </div>
  );
}

// ---------- SidebarContent (scrollable) ----------
function SidebarContent({ children }) {
  return <div className="sidebar-content">{children}</div>;
}

// ---------- SidebarGroup ----------
function SidebarGroup({ label, action, children, collapsible = false, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const { collapsed } = useSidebar();

  if (collapsible && !collapsed) {
    return (
      <div className="sidebar-group collapsible">
        <div
          className="sidebar-group-label-row"
          onClick={() => setOpen(!open)}
        >
          <span className="sidebar-group-label">{label}</span>
          <Icon name={open ? 'chevron-down' : 'chevron-right'} size={14} color="#5a6a9e" />
        </div>
        {open && <div className="sidebar-group-content">{children}</div>}
      </div>
    );
  }

  return (
    <div className="sidebar-group">
      {label && !collapsed && (
        <div className="sidebar-group-header">
          <span className="sidebar-group-label">{label}</span>
          {action}
        </div>
      )}
      <div className="sidebar-group-content">{children}</div>
    </div>
  );
}

// ---------- SidebarMenu ----------
function SidebarMenu({ children }) {
  return <div className="sidebar-menu">{children}</div>;
}

// ---------- SidebarMenuItem ----------
function SidebarMenuItem({ children, active }) {
  return <div className={`sidebar-menu-item ${active ? 'active' : ''}`}>{children}</div>;
}

// ---------- SidebarMenuButton ----------
function SidebarMenuButton({ icon, children, onClick, active, badge, isDropdown, value, onChange, options, disabled }) {
  const { collapsed } = useSidebar();

  if (isDropdown) {
    return (
      <div className="sidebar-menu-button sidebar-dropdown">
        <span className="sidebar-menu-icon">
          {icon && <Icon name={icon} size={16} color="#c4ff00" />}
        </span>
        {!collapsed && (
          <span className="sidebar-menu-text">{children}</span>
        )}
        {!collapsed && <Icon name="chevron-down" size={14} color="#5a6a9e" />}
        <select
          className="sidebar-select"
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <button
      className={`sidebar-menu-button ${active ? 'sidebar-menu-active' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="sidebar-menu-icon">
        {icon && <Icon name={icon} size={16} color={active ? '#c4ff00' : '#5a6a9e'} />}
      </span>
      {!collapsed && (
        <span className="sidebar-menu-text">{children}</span>
      )}
      {!collapsed && badge && (
        <span className="sidebar-menu-badge">{badge}</span>
      )}
    </button>
  );
}

// ---------- SidebarMenuBadge ----------
function SidebarMenuBadge({ children }) {
  return <span className="sidebar-menu-badge">{children}</span>;
}

// ---------- SidebarFooter (sticky bottom) ----------
function SidebarFooter({ children }) {
  return <div className="sidebar-footer">{children}</div>;
}

// ---------- Sidebar (main component) ----------
function Sidebar({ children }) {
  const { collapsed } = useSidebar();
  return (
    <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      {children}
    </div>
  );
}

// ---------- SidebarProvider ----------
function SidebarProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <SidebarContext.Provider value={{ collapsed, toggleCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

// ============================================================
// App Sidebar — the actual navigation sidebar
// ============================================================
export function AppSidebar({ currentTopicId, onOpenTopic, completed, mobileOpen }) {
  const [subjectId, setSubjectId] = useState('business-intelligence');
  const [unitId, setUnitId] = useState('unit-1');

  const { collapsed, toggleCollapsed } = useSidebar();
  const subjectUnits = units[subjectId] || [];
  const topics = subjectUnits.find((u) => u.id === unitId)?.topics || [];
  const biTopics = units['business-intelligence'][0].topics;
  const doneCount = completed.size;
  const totalCount = biTopics.length;

  function handleSubjectChange(e) {
    const newSubject = e.target.value;
    setSubjectId(newSubject);
    const firstUnit = units[newSubject]?.[0];
    if (firstUnit) setUnitId(firstUnit.id);
  }

  return (
    <SidebarProvider>
      <div className={`sidebar-wrapper ${mobileOpen ? 'mobile-open' : ''}`}>
        <Sidebar>
          {/* Header */}
          <SidebarHeader />

          {/* Content */}
          <SidebarContent>
            {/* Group: Subjects */}
            <SidebarGroup label="Subjects">
              <SidebarMenu>
                {subjects.map((s) => (
                  <SidebarMenuItem key={s.id} active={s.id === subjectId}>
                    <SidebarMenuButton
                      icon="book"
                      disabled={!s.available}
                      onClick={() => {
                        if (s.available) {
                          setSubjectId(s.id);
                          const firstUnit = units[s.id]?.[0];
                          if (firstUnit) setUnitId(firstUnit.id);
                        }
                      }}
                    >
                      {s.name}
                      {!s.available && (
                        <span className="sidebar-menu-badge-soon">Baad Mein</span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>

            {/* Group: Subject & Unit Selectors */}
            <SidebarGroup label="Navigate">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    icon="folder"
                    isDropdown
                    value={subjectId}
                    onChange={handleSubjectChange}
                    options={subjects.map((s) => ({
                      value: s.id,
                      label: s.name,
                      disabled: !s.available,
                    }))}
                  >
                    Subject
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    icon="layers"
                    isDropdown
                    value={unitId}
                    onChange={(e) => setUnitId(e.target.value)}
                    options={subjectUnits.map((u) => ({
                      value: u.id,
                      label: `Unit ${u.number} · ${u.name}`,
                    }))}
                  >
                    Unit
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            {/* Group: Topics */}
            <SidebarGroup label="Topics" collapsible defaultOpen>
              <SidebarMenu>
                {topics.map((t) => (
                  <SidebarMenuItem key={t.id} active={t.id === currentTopicId}>
                    <SidebarMenuButton
                      icon="file"
                      active={t.id === currentTopicId}
                      onClick={() => onOpenTopic(t.id)}
                      badge={completed.has(t.id) ? '✓' : undefined}
                    >
                      {t.number}. {t.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>

            {/* Group: Quick Links */}
            <SidebarGroup label="Quick Access">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    icon="home"
                    onClick={() => window.location.hash = '#/'}
                  >
                    Home
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    icon="layers"
                    onClick={() => window.location.hash = `#/subject/${subjectId}`}
                  >
                    Units
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    icon="quiz"
                    active
                    onClick={() => window.location.hash = '#/subject/business-intelligence/exam'}
                    badge="★"
                  >
                    Important Exam Qs
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          {/* Footer */}
          <SidebarFooter>
            <div className="sidebar-progress-card">
              {!collapsed && (
                <>
                  <div className="sidebar-progress-header">
                    <span>Unit 1 Progress</span>
                    <span className="sidebar-progress-count">{doneCount}/{totalCount}</span>
                  </div>
                  <div className="sidebar-progress-bar">
                    <div
                      className="sidebar-progress-fill"
                      style={{ width: `${(doneCount / totalCount) * 100}%` }}
                    />
                  </div>
                </>
              )}
              <button
                className="sidebar-exam-link"
                onClick={() => window.location.hash = '#/subject/business-intelligence/exam'}
              >
                <Icon name="quiz" size={14} color="#c4ff00" />
                {!collapsed && <span>Important Exam Qs</span>}
              </button>
            </div>
          </SidebarFooter>

          {/* Rail */}
          <div className="sidebar-rail" onClick={toggleCollapsed}>
            <Icon name={collapsed ? 'chevron-right' : 'chevron-left'} size={14} color="#5a6a9e" />
          </div>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}

export { SidebarTrigger, useSidebar };
