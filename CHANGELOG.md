# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-15

### Added

#### Core Features
- **Commit Message Validation**: Full support for Conventional Commits specification validation
- **TOML Configuration**: Configurable rules via `commitlint.toml` or `.commitlint.toml` files
- **Git Hook Integration**: Built-in installer for git commit-msg hooks
- **Cargo Subcommand**: Works seamlessly as `cargo commitlint` after installation
- **Multiple Validation Rules**: Support for type, scope, subject, body, and footer validation
- **Case Validation**: Support for various case formats (lowercase, uppercase, sentence-case, etc.)
- **Regex-based Parsing**: Flexible commit message parsing with customizable patterns
- **Ignore Patterns**: Skip validation for specific commit patterns using regex

#### Configuration Options
- Type validation with enum and case requirements
- Scope validation with enum and case requirements
- Subject validation (case, empty check, full stop)
- Header validation (min/max length)
- Body validation (leading blank, max line length)
- Footer validation (leading blank, max line length)
- Custom parser patterns
- Ignore patterns for skipping validation

#### CLI Commands
- `cargo commitlint install` - Install git commit-msg hook
- `cargo commitlint uninstall` - Remove git commit-msg hook
- `cargo commitlint check` - Validate commit messages (with `--message` flag or stdin)

#### Documentation
- Comprehensive documentation site built with Angular
- Getting Started guide
- Configuration reference
- Examples and use cases
- API reference
- Contributing guidelines
- Conventional Commits specification guide

#### Developer Experience
- Integration with `cargo-husky` for comprehensive git hook management
- Pre-commit hook for code formatting and clippy checks
- Pre-push hook for running tests
- Commit-msg hook for automatic commit message validation

#### SEO & Discoverability
- `llms.txt` file for LLM crawlers
- `ai.txt` file for AI crawlers
- Comprehensive meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD)
- XML sitemap
- robots.txt with AI crawler support

#### CI/CD
- GitHub Actions workflows for CI
- Multi-platform release workflow (Linux, Windows, macOS)
- Documentation deployment workflow
- CodeQL security scanning
- Automated dependency updates with Dependabot
- Stale issue/PR management

#### Project Infrastructure
- Issue templates (bug report, feature request, question)
- Pull request template
- Security policy
- Contributing guidelines
- Cursor rules for development workflow

### Changed

- Initial release

### Fixed

- Cargo subcommand argument handling for proper `cargo commitlint` usage

### Security

- Security audit workflow in CI
- CodeQL analysis for vulnerability detection
- Security policy for responsible disclosure

## [Unreleased]

### Planned Features
- Support for more commit types
- Enhanced error messages
- Configuration validation improvements
- Performance optimizations

---

[1.0.0]: https://github.com/pegasusheavy/cargo-commitlint/releases/tag/v1.0.0

